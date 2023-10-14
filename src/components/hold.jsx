// Check user's password
const isPasswordCorrect = await bcrypt.compare(
  req.body.password, // might change
  User.findOne({
    email: session.user.email,
  }).password
);

if (isPasswordCorrect) {
  // Ensure the withdrawal amount is valid
  const withdrawalAmount = parseFloat(req.body.withdrawalAmount); //might change

  if (withdrawalAmount <= 0) {
    return new NextResponse("Invalid withdrawal amount", { status: 400 });
  }

  try {
    await connect();

    // Find the user's balance
    const balance = await Balance.findOne({
      email: session.user.email,
      accountName: "flex",
    });

    if (!balance) {
      return new NextResponse("Balance not found", { status: 404 });
    }

    // Check if the withdrawal amount is less than or equal to the available balance
    if (balance.accountBalance < withdrawalAmount) {
      return new NextResponse("Insufficient balance", { status: 400 });
    }

    // Deduct the withdrawal amount from the balance
    const newBalance = balance.accountBalance - withdrawalAmount;

    // Update the balance in the database

    await fetch(`/api/balances/${balance._id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...balance.toJSON(),
        accountBalance: newBalance,
      }),
    });

    // You may also want to record the withdrawal transaction, log it, or provide a reference number
    // ...

    return new NextResponse("Withdrawal successful", { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal server error", { status: 500 });
  }
} else {
  return new NextResponse("Incorrect password", { status: 401 });
}

try {
  await connect();

  // Find the user's balance
  const balance = await Balance.findOne({
    email: session.user.email,
    accountName: "flex",
  });

  if (!balance) {
    return new NextResponse("Balance not found", { status: 404 });
  }

  // Check if the withdrawal amount is less than or equal to the available balance
  if (balance.accountBalance < withdrawalAmount) {
    return new NextResponse("Insufficient balance", { status: 400 });
  }

  // Deduct the withdrawal amount from the balance
  const newBalance = balance.accountBalance - withdrawalAmount;

  // Update the balance in the database
  await Balance.findByIdAndUpdate(balance._id, {
    accountBalance: newBalance,
  });

  // You may also want to record the withdrawal transaction, log it, or provide a reference number
  // ...

  return new NextResponse("Withdrawal successful", { status: 200 });
} catch (error) {
  console.error(error);
  return new NextResponse("Internal server error", { status: 500 });
}

import { NextResponse } from "next/server";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import Withdrawal from "@/models/Withdrawal";

export const POST = async (request) => {
  const { withdrawalAmount, email, password } = await request.json();

  await connect();

  const user = await User.findOne({ email });

  if (!user) {
    return new NextResponse("User not found", { status: 404 });
  }

  // Compare the provided password with the stored hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (isPasswordCorrect) {
    if (withdrawalAmount <= 0) {
      return new NextResponse("Invalid withdrawal amount", { status: 400 });
    }
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
