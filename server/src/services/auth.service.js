import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export async function registerService ({ email, name, password }) {
    //입력값 검사
    if(!email || !name || !password){
        const error = new Error("이메일, 이름, 비밀번호를 모두 입력해주세요.");
        error.status = 400;
        throw error;
    }

    //패스워드 길이 검사
    if(password.length < 8){
        const error = new Error("패스워드의 길이는 8자 이상이어야 합니다.");
        error.status = 400;
        throw error;
    }

    //이메일 중복 검사
    const existingUser = await prisma.user.findUnique({
        where: {email},
    });
    if(existingUser){
        const error = new Error("이미 존재하는 이메일입니다.");
        error.status = 409;
        throw error;
    }

    //비밀번호 해싱
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

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