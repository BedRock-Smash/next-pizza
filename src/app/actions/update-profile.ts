"use server";

import { prisma } from "@/prisma/prizma-client";

export async function updateProfile(data: {
    email: string;
    password?: string;
    fullName?: string;
}) {
    try {
        const findUser = await prisma.user.findUnique({
            where:{
                email:data.email,
            }
        })
        await prisma.user.update({
            where: {
                email: data.email,
            },
            data: {
                email: data.email,
                password: data.password,
                fullName: data.fullName,
            },
        });
        if (!findUser) {
            throw new Error("user not found");
        }
    } catch (error) {
        console.log(error);
    }
}
