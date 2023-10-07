import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Safelock from "@/models/Safelock";

export const PUT = async (request, { params }) => {
  const { id } = params;
  const { status, amount } = await request.json();

  await connect();

  // Define an object to hold the fields you want to update
  const updatedFields = {};

  // Check if 'status' exists in the request data and update it
  if (status) {
    updatedFields.status = status;
  }

  // Check if 'amount' exists in the request data and update it
  if (amount) {
    updatedFields.amount = amount;
  }

  // Use the 'updateFields' object to update the Safelock
  await Safelock.findByIdAndUpdate(id, updatedFields);

  return NextResponse.json({ message: "Safelock updated" }, { status: 200 });
};

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const safelock = await Safelock.findById(id);

    return new NextResponse(JSON.stringify(safelock), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
