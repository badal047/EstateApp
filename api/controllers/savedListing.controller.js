import mongoose from "mongoose";
import { SavedListing } from "../models/savedListing.model.js";
import Listing  from "../models/listing.model.js";
import User  from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';
import ApiResponse from "../utils/ApiResponse.js";


const toggleListingSave = async (req, res,next) => {
    try {
        
        const listing = await Listing.findById(req.params.listingId);
        if (!listing) {
            return next(errorHandler(404, 'Listing not found!'));
        }
        // console.log(req.user);
        // console.log(req.user.id);

        const { listingId } = req.params;
        // console.log(listingId);

        const savedAlready = await SavedListing.findOne({
            listing: listingId,
            savedBy: req.user.id,
        });


        if (savedAlready) {
            await SavedListing.findByIdAndDelete(savedAlready?._id);
            return res
                .status(200)
                .json(new ApiResponse(200, { isSaved: false ,savedListingId:listingId, unsavedBy: req.user.id}));
        }

        await SavedListing.create({
            listing: listingId,
            savedBy: req.user.id,
        });

        return res
            .status(200)
            .json(new ApiResponse(200, { isSaved: true,savedListingId:listingId, savedBy: req.user.id }));
    } 
    catch (error) {
        // Handle errors
        if (error.statusCode) {
            // If the error has a statusCode property, assume it's a known error
            return res.status(error.statusCode).json(new ApiResponse(error.statusCode, error.message));
        } else {
            // If the error doesn't have a statusCode property, log it as an internal server error
            console.error("Error in toggleListingSave:", error);
            return res.status(500).json(new ApiResponse(500, "Internal Server Error"));
        }
        next(error);
    }
};


const getSavedListings = async (req, res,next) => {
    try {
        const savedListingsAggregate = await SavedListing.aggregate([
            {
                $match: {
                    savedBy: new mongoose.Types.ObjectId(req.user?.id),
                },
            },
            {
                $lookup: {
                    from: "listings",
                    localField: "listing",
                    foreignField: "_id",
                    as: "savedListing",
                    // pipeline: [
                    //     {
                    //         $lookup: {
                    //             from: "users",
                    //             localField: "userRef",
                    //             foreignField: "_id",
                    //             as: "ownerDetails",
                    //         },
                    //     },
                        // {
                        //     $unwind: "$ownerDetails",
                        // },
                    // ],
                    
                },
            },
            
            {
                $unwind: "$savedListing",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "savedBy",
                    foreignField: "_id",
                    as: "ownerDetails",
                },
            },
            {
                $unwind: "$ownerDetails",
            },
            {
                $sort: {
                    createdAt: -1,
                },
            },
            {
                $project: {
                    _id: 0,
                    ownerDetails: {
                        username: 1,
                        avatar: 1,
                    },
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
                        

                        
                    },

                },
            },
        ]);

        
        return res.status(200).json(new ApiResponse(200, {savedListingsAggregate, userId: req.user.id}, "Saved listings fetched successfully "));
    } catch (error) {
        // Handle errors
        console.error("Error in getsavedListings:", error);
        return res.status(500).json(new ApiResponse(500, "Internal Server Error"));
        next(error);
    }
};


export { toggleListingSave, getSavedListings };