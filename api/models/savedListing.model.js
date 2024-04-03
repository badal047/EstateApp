import mongoose, {Schema} from "mongoose"

const savedListingSchema = new mongoose.Schema(
    {

        listing: {
            type: Schema.Types.ObjectId,
            ref: "Listing"
        },
        savedBy: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    {
        timestamps: true
    }
);

export const SavedListing = mongoose.model("SavedListing", savedListingSchema);