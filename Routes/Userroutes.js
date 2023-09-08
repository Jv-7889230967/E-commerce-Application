const express=require("express");
const router=express.Router();
const {Login,Create}=require("../controllers/Usercontroller");

router.route("/create").post(Create);
router.route("/login").post(Login)





module.exports=router;