import mongoose from "mongoose";

export default function(url){
    return mongoose.connect(url);
}