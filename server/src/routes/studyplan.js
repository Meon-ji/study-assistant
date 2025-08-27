import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "StudyPlan route OK" });
});

export default router;
