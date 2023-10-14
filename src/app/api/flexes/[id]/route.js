import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Flex from "@/models/Flex";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { type } = await request.json();

  await connect();
  await Flex.findByIdAndUpdate(id, { type });

  return NextResponse.json({ message: "Flex updated" }, { status: 200 });
};

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const flex = await Flex.findById(id);

    return new NextResponse(JSON.stringify(flex), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
