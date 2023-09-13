"use client";

import * as React from "react";
import { Box, Card, Drawer, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import Link from "next/link";
import Activities from "@/components/activities/Activities";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Activities toggleDrawer={toggleDrawer} anchor={anchor} />
  );

  return (
    <Box
      sx={{
        width: "100%",
        m: "38px 45px",
        overflowX: "auto",
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
            Ubong,
          </Typography>
          <Typography variant="p">Save some money today!</Typography>
        </Box>
        <Link href="/account" style={{ color: "#213555" }}>
          <AccountCircleIcon
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          overflowX: "auto",
          my: "50px",
          display: "flex",
          gap: "1.5rem",
        }}
      >
        <Link
          href="/savings"
          style={{ flexGrow: 1, flexShrink: 1, flexBasis: "0%" }}
        >
          <Card
            sx={{
              display: "flex",
              width: "230px",
              height: "130px",
              pl: "20px",
              alignItems: "center",
              gap: "0.7rem",
              background: "#0066b2",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ShieldOutlinedIcon style={{ fontSize: "2rem" }} />
            <Box>
              <Typography variant="p">Total Savings</Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                N0.00
              </Typography>
            </Box>
          </Card>
        </Link>
        <Link
          href="/flex"
          style={{ flexGrow: 1, flexShrink: 1, flexBasis: "0%" }}
        >
          <Card
            sx={{
              display: "flex",
              width: "230px",
              height: "130px",
              pl: "20px",
              alignItems: "center",
              gap: "0.7rem",
              background: "#FF69B4",
              color: "white",
              cursor: "pointer",
            }}
          >
            <AccountBalanceOutlinedIcon style={{ fontSize: "2rem" }} />
            <Box>
              <Typography variant="p">Flex Account</Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                N0.00
              </Typography>
            </Box>
          </Card>
        </Link>
        <Link
          href="/safelock"
          style={{ flexGrow: 1, flexShrink: 1, flexBasis: "0%" }}
        >
          <Card
            sx={{
              display: "flex",
              width: "230px",
              height: "130px",
              pl: "20px",
              alignItems: "center",
              gap: "0.7rem",
              background: "#7CB9E8",
              color: "white",
              cursor: "pointer",
            }}
          >
            <LockOutlinedIcon style={{ fontSize: "2rem" }} />
            <Box>
              <Typography variant="p">Safelock</Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                N0.00
              </Typography>
            </Box>
          </Card>
        </Link>
      </Box>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Box
              onClick={toggleDrawer(anchor, true)}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                border: "1px solid #0066b2",
                gap: "0.5rem",
                borderBottomRightRadius: "0.5rem",
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
                p: "15px",
                mb: "25px",
                width: "60%",
                [theme.breakpoints.down("md")]: {
                  width: "100%",
                },
              }}
            >
              <ThumbUpAltOutlinedIcon style={{ color: "#0066b2" }} />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  fontSize="0.8rem"
                  mb={-1}
                  color="#0066b2"
                >
                  See your recent activities
                </Typography>
                <Typography variant="p" fontSize="0.7rem">
                  See your most recent activities on YuboVest
                </Typography>
              </Box>
            </Box>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Box
        sx={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          border: "1px solid #7CB9E8",
          gap: "0.5rem",
          borderBottomRightRadius: "0.5rem",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          p: "15px",
          width: "60%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <ThumbUpAltOutlinedIcon style={{ color: "#7CB9E8" }} />
        <Box>
          <Typography
            variant="h6"
            fontWeight={600}
            fontSize="0.8rem"
            mb={-1}
            color="#7CB9E8"
          >
            Create a safelock
          </Typography>
          <Typography variant="p" fontSize="0.7rem">
            Avoid spending temptations. Tap to create a Safelock
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
