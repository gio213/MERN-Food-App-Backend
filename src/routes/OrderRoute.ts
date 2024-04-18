import express from 'express';
import { jwtCheck, jwtParse } from '../middleware/auth';
import OrderController from '../controllers/OrderController';

const router = express.Router();

// Create a new order
router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, OrderController.createCheckoutSession);

// Get all orders

router.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);


// webhook for stripe
router.post("/checkout/webhook", OrderController.stripeWebhookHandler)

export default router;