"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import HomeIcon from "@mui/icons-material/Home";
import SavingsIcon from "@mui/icons-material/Savings";
import { useTheme } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function BottomNav() {
  const session = useSession();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [isHoveringHome, setIsHoveringHome] = React.useState(false);
  const [isHoveringSavings, setIsHoveringSavings] = React.useState(false);

  if (session.status === "authenticated") {
    return (
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: isHoveringHome ? "#213555" : "rgb(160, 174, 192)",
              transition: "all 0.3s linear",
            }}
            onMouseEnter={() => setIsHoveringHome(true)}
            onMouseLeave={() => setIsHoveringHome(false)}
          >
            <HomeIcon />
            <Typography variant="p" sx={{ fontSize: "0.9rem" }}>
              Home
            </Typography>
          </Link>
          <Link
            href="/savings"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: isHoveringSavings ? "#213555" : "rgb(160, 174, 192)",
              transition: "all 0.3s linear",
            }}
            onMouseEnter={() => setIsHoveringSavings(true)}
            onMouseLeave={() => setIsHoveringSavings(false)}
          >
            <SavingsIcon />
            <Typography variant="p" sx={{ fontSize: "0.9rem" }}>
              Savings
            </Typography>
          </Link>
        </BottomNavigation>
      </Paper>
    );
  }
}
