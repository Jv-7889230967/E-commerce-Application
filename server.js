const express=require("express");
const app=express();
const connectDB=require("./config/DB");
const Userroutes=require("./Routes/Userroutes");
const cors=require('cors');
connectDB();

app.use(cors());
app.use(express.json());
app.use("/user",Userroutes);
app.listen(5000,()=>{
    console.log("server connected");
})