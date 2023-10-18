import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Activity from "@/models/Activity";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  try {
    await connect();

    const Activities = await Activity.find(email && { email });

    return new NextResponse(JSON.stringify(Activities), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newActivity = new Activity(body);

  try {
    await connect();

    await newActivity.save();

    return new NextResponse("Activity has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
