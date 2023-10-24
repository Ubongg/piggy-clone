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
import Activities from "@/components/activities/Activities";
import Withdraw from "@/components/withdraw/Withdraw";
import TopUpFlex from "@/components/topUpFlex/TopUpFlex";
import { useGlobalContext } from "@/components/context/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import AutoLogout from "@/components/autoLogout/AutoLogout";

const Flex = () => {
  const session = useSession();
  const router = useRouter();
  const theme = useTheme();
  const {
    activities,
    toggleActivitiesDrawer,
    topUp,
    withdraw,
    toggleTopUpDrawer,
    toggleWithdrawDrawer,
    flexColor,
    balancesData,
    flexesData,
    setFlexActivities,
    setAllActivities,
  } = useGlobalContext();

  const [all, setAll] = useState(true);
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);

  const [value, setValue] = useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setFlexActivities(true);
    setAllActivities(false);
  }, []);

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
            m: "38px 15px 70px",
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
            sx={{ color: "#e0218a" }}
          >
            Flex
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
                    backgroundColor: flexColor,
                  },
                }}
              >
                <Link href="/safelock">
                  <Tab
                    label="safelock"
                    value="1"
                    sx={{
                      color: "rgb(146, 144, 144)",
                      "&.Mui-selected": {
                        color: "#7CB9E8",
                      },
                      textTransform: "capitalize",
                      fontSize: "1rem",
                    }}
                  ></Tab>
                </Link>
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
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ px: 0 }}>
              safelock
            </TabPanel>
            <TabPanel value="2" sx={{ px: 0 }}>
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
                    FLEX ACCOUNT
                  </Typography>
                  {balancesData?.map((balance) => {
                    if (balance.accountName === "flex") {
                      return (
                        <Box key={balance._id}>
                          <Typography
                            variant="h4"
                            fontSize="2.4rem"
                            color={flexColor}
                            fontWeight={600}
                          >
                            N{balance.accountBalance.toLocaleString()}
                          </Typography>
                        </Box>
                      );
                    }
                  })}
                  {balancesData?.length === 0 && (
                    <Typography
                      variant="h4"
                      fontSize="2.4rem"
                      color={flexColor}
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
                        color={flexColor}
                        sx={{
                          fontSize: "0.9rem",
                          width: "50%",
                          textAlign: "center",
                          borderRight: "1px solid rgb(224, 222, 222)",
                          p: "15px",
                          cursor: "pointer",
                        }}
                        onClick={toggleTopUpDrawer(anchor, true)}
                      >
                        Top Up
                      </Typography>
                      <Drawer
                        anchor={anchor}
                        open={topUp[anchor]}
                        onClose={toggleTopUpDrawer(anchor, false)}
                      >
                        <TopUpFlex
                          toggleTopUpDrawer={toggleTopUpDrawer}
                          anchor={anchor}
                        />
                      </Drawer>
                    </React.Fragment>
                  ))}
                  {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Typography
                        variant="p"
                        color={flexColor}
                        sx={{
                          fontSize: "0.9rem",
                          width: "50%",
                          textAlign: "center",
                          p: "15px",
                          cursor: "pointer",
                        }}
                        onClick={toggleWithdrawDrawer(anchor, true)}
                      >
                        Withdraw
                      </Typography>
                      <Drawer
                        anchor={anchor}
                        open={withdraw[anchor]}
                        onClose={toggleWithdrawDrawer(anchor, false)}
                      >
                        <Withdraw
                          toggleWithdrawDrawer={toggleWithdrawDrawer}
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
                    TRANSACTIONS
                  </Typography>
                  <Box
                    sx={{
                      mt: "10px",
                    }}
                  >
                    <Typography
                      variant="p"
                      color={all ? "white" : "black"}
                      backgroundColor={all ? flexColor : "white"}
                      border={all ? "none" : "1px solid rgb(224, 222, 222)"}
                      sx={{
                        fontSize: "0.9rem",
                        p: "5px 15px",
                        mr: "20px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                      onClick={() => {
                        setAll(true);
                        setCredit(false);
                        setDebit(false);
                      }}
                    >
                      All
                    </Typography>
                    <Typography
                      variant="p"
                      color={credit ? "white" : "black"}
                      backgroundColor={credit ? flexColor : "white"}
                      border={credit ? "none" : "1px solid rgb(224, 222, 222)"}
                      sx={{
                        fontSize: "0.9rem",
                        p: "5px 15px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        mr: "20px",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                      onClick={() => {
                        setAll(false);
                        setCredit(true);
                        setDebit(false);
                      }}
                    >
                      Credit
                    </Typography>
                    <Typography
                      variant="p"
                      color={debit ? "white" : "black"}
                      backgroundColor={debit ? flexColor : "white"}
                      border={debit ? "none" : "1px solid rgb(224, 222, 222)"}
                      sx={{
                        fontSize: "0.9rem",
                        p: "5px 15px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                      }}
                      onClick={() => {
                        setAll(false);
                        setCredit(false);
                        setDebit(true);
                      }}
                    >
                      Debit
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    borderTop: "1px solid rgb(224, 222, 222)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mx: "30px",
                    py: "20px",
                    gap: "1.5rem",
                  }}
                >
                  {all &&
                    flexesData
                      ?.sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .slice(0, 5)
                      .map((flex) => {
                        return (
                          <Box
                            key={flex._id}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              width: "100%",
                            }}
                          >
                            <Paper
                              elevation={2}
                              sx={{
                                p: "15px 25px 10px",
                                background: "#ffd7e9",
                                color: flexColor,
                              }}
                            >
                              <AccountBalanceOutlinedIcon
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
                                {flex.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "1.1rem",
                                  fontWeight: 600,
                                }}
                              >
                                N{flex.amount.toLocaleString()}
                              </Typography>
                            </Box>
                          </Box>
                        );
                      })}

                  {all && flexesData?.length === 0 && (
                    <Typography variant="p" fontSize="0.9rem">
                      You have no flex transaction
                    </Typography>
                  )}

                  {credit &&
                    flexesData
                      ?.filter((flex) => flex.type === "credit")
                      .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .slice(0, 5)
                      .map((flex) => {
                        return (
                          <Box
                            key={flex._id}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              width: "100%",
                            }}
                          >
                            <Paper
                              elevation={2}
                              sx={{
                                p: "15px 25px 10px",
                                background: "#ffd7e9",
                                color: flexColor,
                              }}
                            >
                              <AccountBalanceOutlinedIcon
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
                                {flex.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "1.1rem",
                                  fontWeight: 600,
                                }}
                              >
                                N{flex.amount.toLocaleString()}
                              </Typography>
                            </Box>
                          </Box>
                        );
                      })}

                  {credit &&
                    flexesData?.filter((flex) => flex.type === "credit")
                      .length === 0 && (
                      <Typography variant="p" fontSize="0.9rem">
                        You have no credit flex transaction
                      </Typography>
                    )}

                  {debit &&
                    flexesData
                      ?.filter((flex) => flex.type === "debit")
                      .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      )
                      .slice(0, 5)
                      .map((flex) => {
                        return (
                          <Box
                            key={flex._id}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              width: "100%",
                            }}
                          >
                            <Paper
                              elevation={2}
                              sx={{
                                p: "15px 25px 10px",
                                background: "#ffd7e9",
                                color: flexColor,
                              }}
                            >
                              <AccountBalanceOutlinedIcon
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
                                {flex.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontSize: "1.1rem",
                                  fontWeight: 600,
                                }}
                              >
                                N{flex.amount.toLocaleString()}
                              </Typography>
                            </Box>
                          </Box>
                        );
                      })}

                  {debit &&
                    flexesData?.filter((flex) => flex.type === "debit")
                      .length === 0 && (
                      <Typography variant="p" fontSize="0.9rem">
                        You have no debit flex transaction
                      </Typography>
                    )}

                  {["right"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        sx={{
                          fontSize: "0.9rem",
                          color: "#0066b2",
                          mt: "30px",
                          mb: "-15px",
                          pl: 0,
                        }}
                        onClick={toggleActivitiesDrawer(anchor, true)}
                      >
                        view more transactions
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={activities[anchor]}
                        onClose={toggleActivitiesDrawer(anchor, false)}
                      >
                        <Activities
                          toggleActivitiesDrawer={toggleActivitiesDrawer}
                          anchor={anchor}
                          debit={debit}
                          credit={credit}
                        />
                      </Drawer>
                    </React.Fragment>
                  ))}
                </Box>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
        <AutoLogout />
      </Box>
    );
  }
};
export default Flex;
