import { body, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";





const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a string"),
    body("city").isString().notEmpty().withMessage("City must be a string"),
    body("country").isString().notEmpty().withMessage("Country must be a string"),
    handleValidationErrors,


];


export const validateMyRestaurantRequest = [
    body("name").isString().notEmpty().withMessage("Restaurant name is required"),
    body("city").isString().notEmpty().withMessage("City is required"),
    body("country").isString().notEmpty().withMessage("Country is required"),
    body("deliveryPrice").isFloat({ min: 0 }).withMessage("Delivery price is required"),
    body("estimatedDeliveryTime").isInt({ min: 0 }).notEmpty().withMessage("Estimated delivery time is required"),
    body("cuisines").isArray().notEmpty().withMessage("Cuisines must be an array").notEmpty().withMessage("Cuisines is required"),
    body("menuItems").isArray().notEmpty().withMessage("Menu items must be an array"),
    body("menuItems.*.name").notEmpty().withMessage("Menu item name is required"),
    body("menuItems.*.price").isFloat({ min: 0 }).withMessage("Menu item price is required and must be a positive number"),


    handleValidationErrors,
]