import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Withdrawal from "@/models/Withdrawal";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import Balance from "@/models/Balance";

export const GET = async (request) => {
  const url = new URL(request.url);

  const email = url.searchParams.get("email");

  try {
    await connect();

    const withdrawals = await Withdrawal.find(email && { email });

    return new NextResponse(JSON.stringify(withdrawals), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const { withdrawalAmount, email, password } = await request.json();

  await connect();

  const user = await User.findOne({ email });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  const balance = await Balance.findOne({
    email: user.email,
    accountName: "flex",
  });
  // Compare the provided password with the stored hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    if (withdrawalAmount <= 0) {
      return new NextResponse("Invalid withdrawal amount", { status: 400 });
    }
    if (balance.accountBalance < withdrawalAmount) {
      return new NextResponse("Insufficient balance", { status: 400 });
    }

    await Withdrawal.deleteMany({});

    const newWithdrawal = new Withdrawal({
      withdrawalAmount,
      email,
    });
    try {
      await newWithdrawal.save();
      return new NextResponse("Withdrawal has been Saved", {
        status: 201,
      });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  } else {
    return new NextResponse("Incorrect password", { status: 401 });
  }
};
