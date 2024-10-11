
import express from "express";
import mongoDb from "./config/db.js"
import router from "./routes/index.js";
const app = express();
const PORT = process.env.POST || 5005;

mongoDb("mongodb://127.0.0.1:27017/coinx")
.then(() => {
    console.log("Db connected")
}).catch((error) => {
    console.log(error)
})
app.use(express.json())
app.use("/",router)
app.use((err,req,res,next) => {
    if(err){
        console.log("Error occured",err)
    }
    next()
})

app.listen(PORT,() => {
    console.log(`server is listinig on https://localhost:${PORT}`)
})