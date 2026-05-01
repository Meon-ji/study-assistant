import { Router } from "express";
import { register } from "../controllers/auth.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Auth route OK" });
});

//회원가입
router.post("/register", register);

export default router;
