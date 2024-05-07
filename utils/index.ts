import prisma from "@/prisma";

export const conncetToDb = async () => {
  try {
    await prisma.$connect();
    console.log("db conncet");
  } catch (error: any) {
    console.log("db conncet failed");
    return new Error(error.message);
  }
};
