import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";
import timetableRouter from "./routes/timetable.js";
import scheduleRouter from "./routes/schedule.js";
import examsRouter from "./routes/exams.js";
import studyplanRouter from "./routes/studyplan.js";

const app = express();
app.use(cors());
app.use(express.json());

// 헬스체크 API
app.get("/api/health", (req, res) => res.json({ ok: true }));

// 라우터 등록
app.use("/api/auth", authRouter);
app.use("/api/timetable", timetableRouter);
app.use("/api/schedule", scheduleRouter);
app.use("/api/exams", examsRouter);
app.use("/api/studyplan", studyplanRouter);

export default app;