import ApiResponse from "@/me";
import prisma from "@/prisma";
import { conncetToDb } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await conncetToDb();
    let response = new ApiResponse(true, null);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "db connecting failed",
      data: null,
    });
  }
};
