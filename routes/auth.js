import express from "express";
import {
  Deanlogin,
  createDean,
  createUser,
  login,
} from "../controllers/auth.js";

const router = express.Router();

router.post("/Studentlogin", login);
router.post("/Deanlogin", Deanlogin);

export default router;
