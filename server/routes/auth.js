import express from "express";
import {
  createUser,
  verification,
  login,
  requireSignin,
  authMiddleware,
  adminMiddleware
} from "../controllers/auth.js";
const router = express.Router();

router.post("/account/register", createUser);
router.post("/account/verification", verification);
router.post("/account/login", login);


router.get('/user', requireSignin, authMiddleware);
router.get('/admin', requireSignin, adminMiddleware);

export default router;