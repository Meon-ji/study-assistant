import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./config/db.js";
import { syncModels } from "./models/index.js";

import authRouter from "./routes/auth.js";
import timetableRouter from "./routes/timetable.js";
import scheduleRouter from "./routes/schedule.js";
import studyplanRouter from "./routes/studyplan.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 헬스체크 API
app.get("/api/health", (req, res) => res.json({ ok: true }));

// 라우터 등록
app.use("/api/auth", authRouter);
app.use("/api/timetable", timetableRouter);
app.use("/api/schedule", scheduleRouter);
app.use("/api/studyplan", studyplanRouter);

const PORT = process.env.PORT || 4000;

(async () => {
  await testConnection();
  await syncModels();
  app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
})();
