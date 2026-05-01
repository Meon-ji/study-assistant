import { registerService } from "../services/auth.service.js";

export async function register(req, res){
    try{
        const user = await registerService(req.body);

        return res.status(201).json({
            message:"회원가입 성공",
            user,
        });
    } catch(err){
        console.error("Register error:", err);

        return res.status(err.status || 500).json({
            message: err.message || "서버 오류",
        });
    }
}