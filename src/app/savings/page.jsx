"use client";

import { Box, Button, Card, Drawer, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const Savings = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        m: "38px 45px",
        [theme.breakpoints.down("sm")]: {
          m: "38px 15px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} fontSize="1.8rem">
            Savings
          </Typography>
          <Typography variant="p">Let's see how well you're doing.</Typography>
        </Box>
        <Link href="/account" style={{ color: "#213555" }}>
          <AccountCircleIcon
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          border: "1px solid rgb(224, 222, 222)",
          borderBottomRightRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          p: "15px 15px 20px",
          my: "40px",
          width: "60%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Typography variant="h6" fontSize="0.8rem">
          Total Balance
        </Typography>
        <Typography
          variant="h4"
          fontSize="2.4rem"
          color="#27374D"
          fontWeight={600}
        >
          N0.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          [theme.breakpoints.down("sm")]: {
            gap: "1rem",
          },
        }}
      >
        <Link
          href="/flex"
          style={{ flexGrow: 1, flexShrink: 1, flexBasis: "0%" }}
        >
          <Card
            sx={{
              display: "flex",
              maxWidth: "250px",
              maxHeight: "250px",
              p: "30px 20px",
              flexDirection: "column",
              gap: "0.9rem",
              background: "#ffd7e9",
              boxShadow: "none",
              cursor: "pointer",
              borderBottomRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              borderBottomLeftRadius: "0.5rem",
              [theme.breakpoints.down("sm")]: {
                gap: "0.3rem",
              },
            }}
          >
            <AccountBalanceOutlinedIcon
              style={{ fontSize: "2rem", color: "#e0218a" }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#e0218a",
                fontWeight: 600,
                fontSize: "1.2rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem",
                },
              }}
            >
              Flex Naira
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "black",
                fontSize: "0.9rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.8rem",
                },
              }}
            >
              Flexible savings for emergencies. Free transfers, withdrawals etc.
              8% p.a
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontWeight: 600,
                color: "#e0218a",
                fontSize: "1.1rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.9rem",
                },
              }}
            >
              N0.00
            </Typography>
          </Card>
        </Link>
        <Link
          href="/safelock"
          style={{ flexGrow: 1, flexShrink: 1, flexBasis: "0%" }}
        >
          <Card
            sx={{
              display: "flex",
              maxWidth: "250px",
              maxHeight: "250px",
              p: "30px 20px",
              flexDirection: "column",
              gap: "0.9rem",
              background: "#E0FFFF",
              cursor: "pointer",
              boxShadow: "none",
              borderBottomRightRadius: "1rem",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              borderBottomLeftRadius: "0.5rem",
              [theme.breakpoints.down("sm")]: {
                gap: "0.3rem",
              },
            }}
          >
            <LockOutlinedIcon style={{ fontSize: "2rem", color: "#7CB9E8" }} />
            <Typography
              variant="h5"
              sx={{
                color: "#7CB9E8",
                fontWeight: 600,
                fontSize: "1.2rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "1rem",
                },
              }}
            >
              Safelock
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "black",
                fontSize: "0.9rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.8rem",
                },
              }}
            >
              Lock funds to avoid spending temptations. Upfront interest. Up to
              13% p.a
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontWeight: 600,
                color: "#7CB9E8",
                fontSize: "1.1rem",
                [theme.breakpoints.down("sm")]: {
                  fontSize: "0.9rem",
                },
              }}
            >
              N0.00
            </Typography>
          </Card>
        </Link>
      </Box>
    </Box>
  );
};
export default Savings;