import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const CountDown = ({ targetDate, id }) => {
  const { safeColor, safelocksData, mutateSafelocks } = useGlobalContext();
  const [daysLeft, setDaysLeft] = useState(0);

  const changeStatus = async (id) => {
    await fetch(`/api/safelocks/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...safelocksData,
        status: "completed",
      }),
    });
    mutateSafelocks();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const paybackDate = new Date(targetDate);
      const timeDifference = paybackDate - currentDate;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setDaysLeft(0);
        changeStatus(id);
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
