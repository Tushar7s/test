const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const review = require("./review.js");
const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
    category: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});
listingSchema.post("findOneAndDelete", async(listing) => {
    if(listing){
    await review.deleteMany({_id : {$in: listing.reviews}});
    }
});
const listing = mongoose.model("listing", listingSchema);
module.exports = listing;