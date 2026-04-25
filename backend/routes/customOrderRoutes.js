import express from 'express';
import {
  createCustomOrder,
  getMyCustomOrders,
} from '../controllers/customOrderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createCustomOrder);
router.route('/myprojects').get(protect, getMyCustomOrders);

export default router;
