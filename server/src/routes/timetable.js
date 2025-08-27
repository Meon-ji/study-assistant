import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ msg: "Timetable route OK" });
});

export default router;
