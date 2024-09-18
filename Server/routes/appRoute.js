const express=require("express");
const router=express.Router();

const {createReview}=require('../controllers/createReview');
const{getReview}=require("../controllers/getReview");

router.get("/getReview",getReview);
router.post("/createReview",createReview);

module.exports=router;