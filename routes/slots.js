import express from "express";
import { verifyDeanToken, verifyToken } from "../middleware/verifyjwt.js";
import {
  BookaSlot,
  pendingSlots,
  showAvailableSlots,
} from "../controllers/slots.js";
const router = express.Router();

router.get("/availableSlots", verifyToken, showAvailableSlots);
router.post("/bookSlot", verifyToken, BookaSlot);

router.get("/pendingSlots", verifyDeanToken, pendingSlots);

export default router;
