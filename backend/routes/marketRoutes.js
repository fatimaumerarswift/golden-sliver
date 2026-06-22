import { Router } from "express";
const router = Router();
import { getPrices, addPrice, updatePrice, deletePrice } from "../controllers/marketControllers.js";

router.get("/prices", getPrices);
router.post("/prices", addPrice);
router.put("/prices/:id", updatePrice);
router.delete("/prices/:id", deletePrice);

export default router;