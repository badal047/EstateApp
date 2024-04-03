import mongoose from "mongoose";
import { SavedListing } from "../models/savedListing.model.js";
import { errorHandler } from '../utils/error.js';



const toggleListingSave = async (req, res) => {
    try {
        
        const listing = await Listing.findById(req.params.id);
        if (!listing) {
            return next(errorHandler(404, 'Listing not found!'));
        }
        
        const { listingId } = req.params;

        const savedAlready = await SavedListing.findOne({
            listing: listingId,
            savedBy: req.user?._id,
        });

        if (savedAlready) {
            await SavedListing.findByIdAndDelete(savedAlready?._id);
            return res
                .status(200)
                .json(new ApiResponse(200, { isSaved: false }));
        }

        await SavedListing.create({
            listing: listingId,
            savedBy: req.user?._id,
        });

        return res
            .status(200)
            .json(new ApiResponse(200, { isSaved: true }));
    } 
    catch (error) {
        // Handle errors
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, error.message));
        } else {
            console.error("Error in toggleListingSave:", error);
            return res.status(500).json(new ApiResponse(500, "Internal Server Error"));
        }
    }
};


const getSavedListings = async (req, res) => {
    try {
        const savedListingsAggregate = await SavedListing.aggregate([
            {
                $match: {
                    savedBy: new mongoose.Types.ObjectId(req.user?._id),
                },
            },
            {
                $lookup: {
                    from: "listings",
                    localField: "listing",
                    foreignField: "_id",
                    as: "savedListing",
                    pipeline: [
                        {
                            $lookup: {
                                from: "users",
                                localField: "userRef",
                                foreignField: "_id",
                                as: "ownerDetails",
                            },
                        },
                        {
                            $unwind: "$ownerDetails",
                        },
                    ],
                },
            },
            {
                $unwind: "$savedListing",
            },
            {
                $sort: {
                    createdAt: -1,
                },
            },
            {
                $project: {
                    _id: 0,
                    savedListing: {
                        _id:1,
                        name:1,
                        description:1,
                        address:1,
                        regularPrice:1,
                        discountPrice:1,
                        bathrooms:1,
                        bedrooms:1,
                        furnished:1,
                        parking:1,
                        type:1,
                        offer:1,
                        imageUrls:1,
                        userRef:1,
                        createdAt:1,
                        updatedAt:1,
                        __v:1,
                        ownerDetails: {
                            username: 1,
                            avatar: 1,
                        },

                        
                    },
                },
            },
        ]);

        return res.status(200).json(new ApiResponse(200, savedListingsAggregate, "Saved listings fetched successfully"));
    } catch (error) {
        // Handle errors
        console.error("Error in getsavedListings:", error);
        return res.status(500).json(new ApiResponse(500, "Internal Server Error"));
    }
};


export { toggleListingSave, getSavedListings };