import mongoose from "mongoose";

const coinsSchema = mongoose.Schema({
    name : {
        type: String,
        require : true
    },
    data : [{
        type : mongoose.Types.ObjectId,
        ref : "Data"
    }]
})

export const Coins = mongoose.model("Coins",coinsSchema)

