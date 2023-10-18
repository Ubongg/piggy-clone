"use client";

import {
  Box,
  Tab,
  Button,
  Card,
  Drawer,
  Typography,
  Paper,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import React, { useState, useEffect } from "react";
import AboutSafelock from "@/components/aboutSafelock/AboutSafelock";
import { useGlobalContext } from "@/components/context/context";
import MakeSafelock from "@/components/makeSafelock/MakeSafelock";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CountDown from "@/components/countDown/CountDown";
import SafeBalance from "@/components/safeBalance/SafeBalance";

const Safelock = () => {
  const session = useSession();
  const router = useRouter();
  const theme = useTheme();
  const {
    createSafelock,
    aboutSafelock,
    toggleAboutSafelockDrawer,
    toggleCreateSafelockDrawer,
    safeColor,
    safelocksData,
    balancesData,
    mutateBalances,
  } = useGlobalContext();

  const [ongoing, setOngoing] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            m: "70px 15px",
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
          <Typography
            variant="h5"
            fontWeight={600}
            fontSize="1.8rem"
            sx={{ color: safeColor }}
          >
            Safelock
          </Typography>
          <ProfileButton />
        </Box>
        <Box sx={{ width: "100%", typography: "body1", mt: "20px" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: safeColor,
                  },
                }}
              >
                <Tab
                  label="safelock"
                  value="1"
                  sx={{
                    color: "rgb(146, 144, 144)",
                    "&.Mui-selected": {
                      color: "#000",
                    },
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                />
                <Link href="/flex">
                  <Tab
                    label="flex"
                    value="2"
                    sx={{
                      color: "rgb(146, 144, 144)",
                      "&.Mui-selected": {
                        color: "#000",
                      },
                      textTransform: "capitalize",
                      fontSize: "1rem",
                    }}
                  />
                </Link>
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ px: 0 }}>
              <Box
                sx={{
                  border: "1px solid rgb(224, 222, 222)",
                  borderBottomRightRadius: "0.5rem",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  mt: "10px",
                  width: "65%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                }}
              >
                <Box
                  sx={{
                    borderBottom: "1px solid rgb(224, 222, 222)",
                    p: "15px 15px 20px",
                  }}
                >
                  <Typography variant="h6" fontSize="0.7rem">
                    SAFELOCK BALANCE
                  </Typography>
                  {balancesData?.map((balance) => {
                    if (balance.accountName === "safelock") {
                      return (
                        <Box key={balance._id}>
                          <SafeBalance balance={balance} />
                        </Box>
                      );
                    }
                  })}
                  {balancesData?.length === 0 && (
                    <Typography
                      variant="h4"
                      fontSize="2.4rem"
                      color={safeColor}
                      fontWeight={600}
                    >
                      N0.00
                    </Typography>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Typography
                        variant="p"
                        color={safeColor}
                        sx={{
                          fontSize: "0.9rem",
                          borderRight: "1px solid rgb(224, 222, 222)",
                          width: "50%",
                          textAlign: "center",
                          p: "15px",
                          cursor: "pointer",
                        }}
                        onClick={toggleCreateSafelockDrawer(anchor, true)}
                      >
                        Create a Safelock
                      </Typography>
                      <Drawer
                        anchor={anchor}
                        open={createSafelock[anchor]}
                        onClose={toggleCreateSafelockDrawer(anchor, false)}
                      >
                        <MakeSafelock
                          toggleCreateSafelockDrawer={
                            toggleCreateSafelockDrawer
                          }
                          anchor={anchor}
                        />
                      </Drawer>
                    </React.Fragment>
                  ))}
                  {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Typography
                        variant="p"
                        color={safeColor}
                        sx={{
                          fontSize: "0.9rem",
                          width: "50%",
                          textAlign: "center",
                          p: "15px",
                          cursor: "pointer",
                        }}
                        onClick={toggleAboutSafelockDrawer(anchor, true)}
                      >
                        What is Safelock?
                      </Typography>
                      <Drawer
                        anchor={anchor}
                        open={aboutSafelock[anchor]}
                        onClose={toggleAboutSafelockDrawer(anchor, false)}
                      >
                        <AboutSafelock
                          toggleAboutSafelockDrawer={toggleAboutSafelockDrawer}
                          anchor={anchor}
                        />
                      </Drawer>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
              <Box
                sx={{
                  border: "1px solid rgb(224, 222, 222)",
                  borderBottomRightRadius: "0.5rem",
                  borderTopLeftRadius: "0.5rem",
                  borderTopRightRadius: "0.5rem",
                  mt: "50px",
                  width: "65%",
                  [theme.breakpoints.down("md")]: {
                    width: "100%",
                  },
                }}
              >
                <Box
                  sx={{
                    p: "15px 15px 20px",
                  }}
                >
                  <Typography variant="h6" fontSize="0.7rem">
                    MY SAFELOCKS
                  </Typography>
                  <Box
                    sx={{
                      mt: "10px",
                    }}
                  >
                    <Typography
                      variant="p"
                      color={ongoing ? "white" : "black"}
                      backgroundColor={ongoing ? safeColor : "white"}
                      sx={{
                        fontSize: "0.9rem",
                        border: "1px solid rgb(224, 222, 222)",
                        p: "5px 15px",
                        mr: "20px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                      onClick={() => {
                        setOngoing(true);
                        setCompleted(false);
                      }}
                    >
                      Ongoing
                    </Typography>
                    <Typography
                      variant="p"
                      color={ongoing ? "black" : "white"}
                      backgroundColor={ongoing ? "white" : safeColor}
                      sx={{
                        fontSize: "0.9rem",
                        border: "1px solid rgb(224, 222, 222)",
                        p: "5px 15px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                      onClick={() => {
                        setOngoing(false);
                        setCompleted(true);
                      }}
                    >
                      Completed
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderTop: "1px solid rgb(224, 222, 222)",
                    mx: "30px",
                    py: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {ongoing &&
                    safelocksData
                      ?.filter((safelock) => safelock.status === "ongoing")
                      .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .map((safelock) => {
                        return (
                          <Box
                            key={safelock._id}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <Paper
                              elevation={2}
                              sx={{
                                p: "15px 25px 10px",
                                background: "#9fd7fe",
                                color: safeColor,
                              }}
                            >
                              <LockOutlinedIcon
                                style={{ fontSize: "1.8rem" }}
                              />
                            </Paper>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  textTransform: "capitalize",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {safelock.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "1.1rem",
                                  fontWeight: 600,
                                }}
                              >
                                N{safelock.amount}
                              </Typography>
                            </Box>
                            <CountDown
                              targetDate={safelock.paybackDate}
                              id={safelock._id}
                              amount={safelock.amount}
                            />
                          </Box>
                        );
                      })}

                  {ongoing &&
                    safelocksData?.filter(
                      (safelock) => safelock.status === "ongoing"
                    ).length === 0 && (
                      <Typography variant="p" fontSize="0.9rem">
                        You have no SafeLock setup.
                      </Typography>
                    )}

                  {completed &&
                    safelocksData
                      ?.filter((safelock) => safelock.status === "completed")
                      .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .map((safelock) => {
                        return (
                          <Box
                            key={safelock._id}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              position: "relative",
                              width: "100%",
                            }}
                          >
                            <Paper
                              elevation={2}
                              sx={{
                                p: "15px 25px 10px",
                                background: "#9fd7fe",
                                color: safeColor,
                              }}
                            >
                              <LockOutlinedIcon
                                style={{ fontSize: "1.8rem" }}
                              />
                            </Paper>
                            <Box>
                              <Typography
                                variant="h6"
                                sx={{
                                  textTransform: "capitalize",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {safelock.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "1.1rem",
                                  fontWeight: 600,
                                }}
                              >
                                N{safelock.amount}
                              </Typography>
                            </Box>
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
                              paid
                            </Typography>
                          </Box>
                        );
                      })}
                  {completed &&
                    safelocksData?.filter(
                      (safelock) => safelock.status === "completed"
                    ).length === 0 && (
                      <Typography variant="p" fontSize="0.9rem">
                        You have no completed safelock.
                      </Typography>
                    )}
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2" sx={{ px: 0 }}>
              Flex
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    );
  }
};
export default Safelock;
