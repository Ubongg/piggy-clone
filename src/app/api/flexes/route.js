import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Flex from "@/models/Flex";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  try {
    await connect();

    const flexes = await Flex.find(email && { email });

    return new NextResponse(JSON.stringify(flexes), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newFlex = new Flex(body);

  try {
    await connect();

    await newFlex.save();

    return new NextResponse("Flex has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
