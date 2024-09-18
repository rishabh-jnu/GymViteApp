const reviewModel = require('../models/reviewSchema');

exports.getReview = async (req, res) => {
    try {
        // Fetch all reviews
        const reviews = await reviewModel.find({}); // Add await here

        console.log("All reviews of the user", reviews);

        // Send a successful response
        res.status(200).json({
            success: true,
            data: reviews, // Use the 'reviews' variable here
            message: 'Reviews fetched successfully'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal Server error!",
            message: err.message
        });
    }
};
