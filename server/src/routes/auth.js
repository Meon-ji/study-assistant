import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Auth route OK" });
});

export default router;
