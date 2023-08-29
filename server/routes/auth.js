import express from "express";
import {
  createUser,
  verification,
  login
  } from "../controllers/auth.js";
  const router = express.Router();
  
  router.post("/account/register", createUser);
  router.post("/account/verification", verification);
  router.post("/account/login", login);
  
  export default router;