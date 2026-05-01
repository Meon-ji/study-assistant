import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export async function registerService ({ email, name, password }) {
    //입력값 검사
    if(!email || !name || !password){
        const error = new Error("이메일, 이름, 비밀번호를 모두 입력해주세요.");
        error.status = 400;
        throw error;
    }

    //이메일 중복 검사
    const existingUser = await prisma.user.findUnique({
        where: {email},
    });
    if(existingUser){
        const error = new Error("이미 존재하는 이메일입니다.");
        error.status = 400;
        throw error;
    }

    //비밀번호 해싱
    const hashedPassword = await bcrypt.hash(password, 10);

    //user 생성
    const user = await prisma.user.create({
        data: {
            email,
            name,
            password: hashedPassword,
        },
        select: {
            id: true,
            email: true,
            name: true,
            major: true,
            grade: true,
        },
    });

    return user;
}