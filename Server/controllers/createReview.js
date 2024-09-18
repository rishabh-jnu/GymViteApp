const reviewModel=require('../models/reviewSchema')
exports.createReview=async(req,res)=>{
    try{
        const {name,contact,email,message}=req.body;
        const response=await reviewModel.create({
            name,
            contact,
            email,
            message
        })
        console.log("New review is added to db",response)
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Review Created Sucessfully'
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err)
        res.status(500).json({
             success:false,
             data:"Initital Server error!",
             message:err.message
        })
    }
}
    