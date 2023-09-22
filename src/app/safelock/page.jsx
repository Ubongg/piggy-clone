"use client";

import { Box, Tab, Button, Card, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import React, { useState } from "react";
import CreateSafelock from "@/components/createSafelock/createSafelock";
import AboutSafelock from "@/components/aboutSafelock/AboutSafelock";

const Safelock = () => {
  const theme = useTheme();
  const [ongoing, setOngoing] = useState(true);
  const [value, setValue] = useState("1");
  const [state, setState] = React.useState({
    right: false,
  });
  const [state2, setState2] = React.useState({
    right: false,
  });

  const safeColor = "#0066b2";

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

  const list = (anchor) => (
    <CreateSafelock toggleDrawer={toggleDrawer} anchor={anchor} />
  );

  const list2 = (anchor) => (
    <AboutSafelock toggleDrawer2={toggleDrawer2} anchor={anchor} />
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
                <Typography
                  variant="h4"
                  fontSize="2.4rem"
                  color={safeColor}
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
                      color={safeColor}
                      sx={{
                        fontSize: "0.9rem",
                        borderRight: "1px solid rgb(224, 222, 222)",
                        width: "50%",
                        textAlign: "center",
                        p: "15px",
                        cursor: "pointer",
                      }}
                      onClick={toggleDrawer(anchor, true)}
                    >
                      Create a Safelock
                    </Typography>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
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
                      onClick={toggleDrawer2(anchor, true)}
                    >
                      What is Safelock?
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
                    onClick={() => setOngoing(true)}
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
                    onClick={() => setOngoing(false)}
                  >
                    Completed
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
                  variant="h4"
                  color={safeColor}
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                  }}
                >
                  Create a Safelock
                </Typography>
                {ongoing ? (
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "1rem",
                      my: "5px",
                    }}
                  >
                    You have no SafeLock setup. Let's help you get started.
                  </Typography>
                ) : (
                  <Typography
                    variant="p"
                    sx={{
                      fontSize: "1rem",
                      my: "5px",
                    }}
                  >
                    You have no completed safelocks just yet. Let's get you
                    started
                  </Typography>
                )}
                {["right"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Typography
                      variant="p"
                      color="white"
                      backgroundColor={safeColor}
                      sx={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        border: "1px solid rgb(224, 222, 222)",
                        p: "8px 50px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                        mt: "10px",
                      }}
                      onClick={toggleDrawer(anchor, true)}
                    >
                      CREATE A SAFELOCK
                    </Typography>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
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
                        fontWeight: 600,
                        border: `1px solid ${safeColor}`,
                        p: "8px 60px",
                        cursor: "pointer",
                        borderBottomRightRadius: "0.5rem",
                        borderTopLeftRadius: "0.5rem",
                        borderTopRightRadius: "0.5rem",
                        my: "5px",
                      }}
                      onClick={toggleDrawer2(anchor, true)}
                    >
                      WHAT IS SAFELOCK?
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
          </TabPanel>
          <TabPanel value="2" sx={{ px: 0 }}>
            Flex
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
export default Safelock;
