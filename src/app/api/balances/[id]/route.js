import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Balance from "@/models/Balance";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { accountBalance } = await request.json();

  await connect();
  await Balance.findByIdAndUpdate(id, { accountBalance });

  return NextResponse.json({ message: "Balance updated" }, { status: 200 });
};

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const balance = await Balance.findById(id);

    return new NextResponse(JSON.stringify(balance), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
