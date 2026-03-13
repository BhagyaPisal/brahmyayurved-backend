import express from "express";
import { createOrder, getOrderById } from "../controllers/orders.controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/:order_id", getOrderById);

export default router;