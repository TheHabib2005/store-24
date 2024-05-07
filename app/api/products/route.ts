import prisma from "@/prisma";
import { conncetToDb } from "@/utils";

import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  let response: {
    success: boolean;
    data: any;
    successMessage: string;
    error: boolean;
    errorMessage: string;
    statusCode: number;
  } = {
    success: false,
    data: null,
    successMessage: "",
    error: false,
    errorMessage: "",
    statusCode: 200,
  };

  // Example usage:

  try {
    await conncetToDb();
    const { brand, categorys, searchQuery } = await req.json();

    console.log(searchQuery);

    const product = await prisma.product.findMany({
      where: {
        brand: {
          in: brand,
        },
        category: {
          in: categorys,
        },
        OR: [
          {
            title: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
          {
            category: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
          {
            brand: {
              contains: searchQuery || "",
              mode: "insensitive",
            },
          },
        ],
      },
      skip: 0,
      take: 10,
    });
    response = {
      success: true,
      data: product,
      successMessage: "fetch data successfully",
      error: false,
      errorMessage: "",
      statusCode: 200,
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
};
