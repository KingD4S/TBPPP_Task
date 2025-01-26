import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

import todoRoute from "../backend/routes/todo.route.js"
import userRoute from "../backend/routes/user.route.js"

const app=express()



dotenv.config();

 const PORT=process.env.PORT || 4001;
 const DB_URI=process.env.MONGODB_URI;

 //database connection code
try {
     await mongoose.connect(DB_URI)
     console.log("connected to mongodb")
} catch (error) {
    console.log(error)
}

//routes define
app.use(express.json());
app.use("/todo",todoRoute);
app.use("/user",userRoute);







const port =4002;
app.listen(PORT,()=>{
 console.log(`server is running on port ${PORT}`)
});

app.get("/", (req, res) => {
    res.send("Welcome to the TODO API!");
});
