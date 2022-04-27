import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants);

router
    .route('/review')
    .post(RestaurantsCtrl.apiPostReview)
    .put(ReviewsCtrl.appUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)

export default router;