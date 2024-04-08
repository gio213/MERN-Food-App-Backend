import express from 'express';
import multer from 'multer';
import MyRestaurantController from '../controllers/MyRestaurantController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyRestaurantRequest } from '../middleware/validation';

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({ storage: storage, limits: { fieldSize: 5 * 1024 * 1025 } }); // 5MB

// /api/my/restaurant

router.post("/", validateMyRestaurantRequest, jwtCheck, jwtParse, upload.single("imageFile"), MyRestaurantController.createMyRestaurant);


export default router;