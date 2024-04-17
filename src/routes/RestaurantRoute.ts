import express, { Request, Response } from 'express';
import { param } from 'express-validator';
import RestaurantController from '../controllers/RestaurantController';

const router = express.Router();

// /api/restaurant/search/:query

router.get('/search/:city', param("city").isString().trim().notEmpty().withMessage("City parameter must be a valid string"), RestaurantController.searchRestaurant);
router.get("/:restaurantId", param("city").isString().trim().notEmpty().withMessage("RestaurandId parameter must be a valid"), RestaurantController.getRestaurant)


export default router;