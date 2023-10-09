import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Balance from "@/models/Balance";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  try {
    await connect();

    const balances = await Balance.find(email && { email });

    return new NextResponse(JSON.stringify(balances), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newBalance = new Balance(body);

  try {
    await connect();

    await newBalance.save();

    return new NextResponse("Balance has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
