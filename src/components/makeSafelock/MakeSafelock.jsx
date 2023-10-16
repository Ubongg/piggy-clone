import { Box, Typography, Drawer, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../context/context";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/app/globals.css";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

const MakeSafelock = ({ toggleCreateSafelockDrawer, anchor }) => {
  const session = useSession();
  const theme = useTheme();
  const {
    safeColor,
    mutateSafelocks,
    balancesData,
    mutateBalances,
    mutateFlexes,
  } = useGlobalContext();
  // const falseDate = (date) => new Date() < date;
  const falseDate = (date) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 9); // Add 10 days to the current date
    return currentDate < date;
  };
  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  const [payBackDate, setPayBackDate] = useState(addDays(new Date(), 10));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = e.target[0].value;
    const title = e.target[1].value;

    const balance = balancesData?.find((balance) => {
      return (
        balance.accountName === "flex" &&
        balance.email === session.data.user.email
      );
    });

    if (balance.accountBalance > amount && amount >= 1000) {
      const newBalance = balance.accountBalance - amount;

      try {
        await fetch("/api/safelocks", {
          method: "POST",
          body: JSON.stringify({
            amount,
            title,
            paybackDate: payBackDate,
            status: "ongoing",
            email: session.data.user.email,
          }),
        });
        mutateSafelocks();
        e.target.reset();
        toast.success("Safelock Created");
      } catch (error) {
        toast.error("Safelock Not Created");
      }

      try {
        await fetch(`/api/balances/${balance._id}`, {
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

      try {
        await fetch(`/api/flexes`, {
          method: "POST",
          body: JSON.stringify({
            amount,
            title: "Flex Debited",
            type: "debit",
            email: session.data.user.email,
          }),
        });
        mutateFlexes();
      } catch (error) {
        console.log("Error creating flex");
      }
    } else {
      toast.error(
        "Insufficient funds in flex or amount should be at least N1000"
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 450,
        height: "100vh",
        padding: "30px 25px",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
        },
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          cursor: "pointer",
          fontSize: "2.5rem",
          color: safeColor,
        }}
        onClick={toggleCreateSafelockDrawer(anchor, false)}
      >
        <CloseIcon style={{ fontSize: "2rem" }} />
      </Box>
      <Box
        sx={{
          my: "30px",
        }}
      >
        <Typography
          variant="h6"
          color={safeColor}
          sx={{
            fontSize: "1.4rem",
            fontWeight: 600,
          }}
        >
          Create a Safelock to Lock Funds
        </Typography>
        <form
          style={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={handleSubmit}
        >
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Amount to Lock / Invest
          </label>
          <input
            type="number"
            placeholder="25000"
            required
            style={{
              outline: "none",
              padding: "17px 15px 19px",
              border: "none",
              background: "#edf2f7",
              marginBottom: "30px",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "0.5rem",
            }}
            className="amountInput"
          />
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Title of SafeLock™
          </label>
          <input
            type="text"
            placeholder="My New Lock"
            required
            style={{
              outline: "none",
              padding: "17px 15px 19px",
              border: "none",
              background: "#edf2f7",
              marginBottom: "30px",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "0.5rem",
            }}
          />
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Set Payback Date
          </label>
          <DatePicker
            filterDate={falseDate}
            selected={payBackDate}
            onChange={(payBackDate) => setPayBackDate(payBackDate)}
            required
            className="datePickerStyle"
          />
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Source of Funds
          </label>
          {balancesData?.map((balance) => {
            if (balance.accountName === "flex") {
              return (
                <div key={balance._id}>
                  <p
                    style={{
                      outline: "none",
                      padding: "15px 15px 17px",
                      border: "none",
                      background: "#edf2f7",
                      marginBottom: "30px",
                      width: "100%",
                      fontSize: "1rem",
                      borderRadius: "0.5rem",
                      color: "rgb(119, 118, 118)",
                    }}
                  >
                    Flex Account - N{balance.accountBalance}
                  </p>
                </div>
              );
            }
          })}
          <button
            style={{
              padding: "12px 0",
              fontWeight: 600,
              fontSize: "0.9rem",
              marginTop: "20px",
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              borderBottomLeftRadius: 0,
              background: safeColor,
              border: "none",
              color: "#fff",
              textTransform: "uppercase",
              height: "50px",
              cursor: "pointer",
              marginBottom: "50px",
            }}
          >
            submit
          </button>
        </form>
      </Box>
    </Box>
  );
};
export default MakeSafelock;
