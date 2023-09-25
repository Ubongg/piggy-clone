"use client";

import { Box, Tab, Button, Card, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import React, { useState } from "react";
import Activities from "@/components/activities/Activities";
import Withdraw from "@/components/withdraw/Withdraw";
import TopUpFlex from "@/components/topUpFlex/TopUpFlex";

const Flex = () => {
  const theme = useTheme();
  const [all, setAll] = useState(true);
  const [credit, setCredit] = useState(false);
  const [debit, setDebit] = useState(false);

  const [value, setValue] = useState("2");
  const [state, setState] = React.useState({
    right: false,
  });
  const [state2, setState2] = React.useState({
    right: false,
  });
  const [state3, setState3] = React.useState({
    right: false,
  });

  const flexColor = "#e0218a";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawer2 = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState2({ ...state2, [anchor]: open });
  };

  const toggleDrawer3 = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState3({ ...state3, [anchor]: open });
  };

  const list = (anchor) => (
    <Activities toggleDrawer={toggleDrawer} anchor={anchor} />
  );

  const list2 = (anchor) => (
    <Withdraw toggleDrawer2={toggleDrawer2} anchor={anchor} />
  );

  const list3 = (anchor) => (
    <TopUpFlex toggleDrawer3={toggleDrawer3} anchor={anchor} />
  );

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
                <Typography
                  variant="h4"
                  fontSize="2.4rem"
                  color={flexColor}
                  fontWeight={600}
                >
                  N0.00
                </Typography>
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
                      onClick={toggleDrawer3(anchor, true)}
                    >
                      Top Up
                    </Typography>
                    <Drawer
                      anchor={anchor}
                      open={state3[anchor]}
                      onClose={toggleDrawer3(anchor, false)}
                    >
                      {list3(anchor)}
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
                      onClick={toggleDrawer2(anchor, true)}
                    >
                      Withdraw
                    </Typography>
                    <Drawer
                      anchor={anchor}
                      open={state2[anchor]}
                      onClose={toggleDrawer2(anchor, false)}
                    >
                      {list2(anchor)}
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
                  mx: "50px",
                  py: "20px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "1rem",
                    my: "5px",
                  }}
                >
                  No transactions to display for now
                </Typography>
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
                      onClick={toggleDrawer(anchor, true)}
                    >
                      view more transactions
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
export default Flex;
