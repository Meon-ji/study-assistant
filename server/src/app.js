import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.route.js";
import timetableRouter from "./routes/timetable.route.js";
import scheduleRouter from "./routes/schedule.route.js";
import examsRouter from "./routes/exams.route.js";
import studyplanRouter from "./routes/studyplan.route.js";

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