"use client";

import { Box, Tab, Button, Card, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { useState } from "react";

const Flex = () => {
  const theme = useTheme();
  const [value, setValue] = useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                  backgroundColor: "#e0218a",
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
            Flex
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
export default Flex;
