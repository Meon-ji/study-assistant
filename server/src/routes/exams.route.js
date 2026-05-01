import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Exams route OK" });
});

export default router;