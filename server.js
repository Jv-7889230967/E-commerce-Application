const express=require("express");
const app=express();
const connectDB=require("./config/DB");
const Userroutes=require("./Routes/Userroutes");
const cors=require('cors');
connectDB();
const port=process.env.PORT || 6000;

app.use(cors());
app.use(express.json());
app.use("/user",Userroutes);
app.listen(port,()=>{
    console.log(`server connected at ${port}`);
})
