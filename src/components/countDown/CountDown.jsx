import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const CountDown = ({ targetDate, id, amount }) => {
  const session = useSession();
  const { safeColor, safelocksData, mutateSafelocks, balancesData } =
    useGlobalContext();
  const [daysLeft, setDaysLeft] = useState(0);

  const flexBalID = balancesData?.find((balance) => {
    return (
      balance.accountName === "flex" &&
      balance.email === session.data.user.email
    );
  });

  const updateFlexBalance = async (id, amountToAdd) => {
    try {
      const newBalance = flexBalID.accountBalance + amountToAdd;

      await fetch(`/api/balances/${flexBalID._id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...balancesData,
          accountBalance: newBalance,
        }),
      });

      mutateBalances();
    } catch (error) {
      console.log("Error updating flex balance ");
    }
  };

  const changeStatus = async (id) => {
    try {
      await fetch(`/api/safelocks/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...safelocksData,
          status: "completed",
        }),
      });

      mutateSafelocks();
    } catch (error) {
      console.log("Error changing safelock status");
    }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const currentDate = new Date();
      const paybackDate = new Date(targetDate);
      const timeDifference = paybackDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setDaysLeft(0);
        try {
          // Change the status first
          await changeStatus(id);

          // Then update the flex balance
          await updateFlexBalance(id, amount);
        } catch (error) {
          // Handle errors here
          toast.error("Error changing status or updating flex balance");
        }
      } else {
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        setDaysLeft(daysRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Box>
      <Typography
        variant="p"
        sx={{
          fontSize: "0.9rem",
          position: "absolute",
          right: 0,
          bottom: "0.5rem",
          color: safeColor,
        }}
      >
        {daysLeft} days left
      </Typography>
    </Box>
  );
};
export default CountDown;
