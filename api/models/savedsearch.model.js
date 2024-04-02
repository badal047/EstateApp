import mongoose from "mongoose"

const savedsearchSchema = new mongoose.Schema(
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

export const Savedsearch = mongoose.model("Savedsearch", savedsearchSchema);