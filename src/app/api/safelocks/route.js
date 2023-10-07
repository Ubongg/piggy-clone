import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Safelock from "@/models/Safelock";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  try {
    await connect();

    const safelocks = await Safelock.find(email && { email });

    return new NextResponse(JSON.stringify(safelocks), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newSafelock = new Safelock(body);

  try {
    await connect();

    await newSafelock.save();

    return new NextResponse("Safelock has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
