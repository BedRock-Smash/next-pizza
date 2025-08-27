import { prisma } from "@/prisma/prizma-client";
import { NextResponse } from "next/server";

export default async function GET() {

    try {
        
    const category = await prisma.category.findMany()
    
    return NextResponse.json(category)

    } catch (error) {
        console.log("Server Error",error);
        return NextResponse.json({message:"Server Error category"},{status:500})
    }


}