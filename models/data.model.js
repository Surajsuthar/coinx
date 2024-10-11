import mongoose from "mongoose";

const data = mongoose.Schema({
    name : {
        type : mongoose.Types.ObjectId,
        ref : "Coins"
    },
    price :{
        type : String,
        require : true
    },
    marketCap : {
        type : String,
        require : true
    },
    Change24H :{
        type : Number,
        require : true
    }
})

export const Data = mongoose.model("Data",data)
