"use client";

import { Box, Tab, Button, Card, Drawer, Typography } from "@mui/material";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import { useState } from "react";

const Flex = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");

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
          sx={{ color: "#0066b2" }}
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
                  backgroundColor: "#0066b2",
                },
              }}
            >
              <Tab
                label="safelock"
                value="1"
                sx={{
                  color: "rgb(146, 144, 144)",
                  "&.Mui-selected": {
                    color: "#0066b2",
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
                      color: "#e0218a",
                    },
                    textTransform: "capitalize",
                    fontSize: "1rem",
                  }}
                />
              </Link>
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ px: 0 }}>
            Safelock
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
