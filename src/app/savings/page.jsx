"use client";

import { Box, Button, Card, Drawer, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { useGlobalContext } from "@/components/context/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Savings = () => {
  const session = useSession();
  const router = useRouter();
  const theme = useTheme();
  const { open, totalSavings, balancesData } = useGlobalContext();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/login");
    }
  }, [session.status, router]);

  if (session.status === "authenticated") {
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
            <Typography variant="p">
              Let us see how well you are doing.
            </Typography>
          </Box>
          <ProfileButton />
        </Box>
        <Box
          sx={{
            border: "1px solid rgb(224, 222, 222)",
            borderBottomRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            p: "15px 15px 20px",
            my: "40px",
            width: "65%",
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
            N{totalSavings}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "1.5rem",
            width: open ? "80%" : "65%",
            [theme.breakpoints.down("sm")]: {
              gap: "1rem",
            },
            [theme.breakpoints.down("md")]: {
              width: "100%",
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
                Flexible savings for emergencies. Free transfers, withdrawals
                etc. 8% p.a
              </Typography>
              {balancesData?.map((balance) => {
                if (balance.accountName === "flex") {
                  return (
                    <Box key={balance._id}>
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
                        N{balance.accountBalance}
                      </Typography>
                    </Box>
                  );
                }
              })}
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
                background: "#9fd7fe",
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
              <LockOutlinedIcon
                style={{ fontSize: "2rem", color: "#0066b2" }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: "#0066b2",
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
                Lock funds to avoid spending temptations. Upfront interest. Up
                to 13% p.a
              </Typography>
              {balancesData?.map((balance) => {
                if (balance.accountName === "safelock") {
                  return (
                    <Box key={balance._id}>
                      <Typography
                        variant="p"
                        sx={{
                          fontWeight: 600,
                          color: "#0066b2",
                          fontSize: "1.1rem",
                          [theme.breakpoints.down("sm")]: {
                            fontSize: "0.9rem",
                          },
                        }}
                      >
                        N{balance.accountBalance}
                      </Typography>
                    </Box>
                  );
                }
              })}
            </Card>
          </Link>
        </Box>
      </Box>
    );
  }
};
export default Savings;
