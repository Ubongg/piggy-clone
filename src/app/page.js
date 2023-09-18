"use client";

import * as React from "react";
import { Box, Button, Card, Drawer, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Link from "next/link";
import Activities from "@/components/activities/Activities";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";

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
            Ubong,
          </Typography>
          <Typography variant="p">Save some money today!</Typography>
        </Box>
        <ProfileButton />
      </Box>
      <Box
        sx={{
          overflowX: "auto",
          mt: "40px",
          mb: "50px",
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
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              borderBottomLeftRadius: 0,
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
              background: "#e0218a",
              color: "white",
              cursor: "pointer",
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              borderBottomLeftRadius: 0,
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
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              borderBottomLeftRadius: 0,
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
              <ThumbUpAltOutlinedIcon
                style={{ color: "#0066b2", fontSize: "1.7rem" }}
              />
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  fontSize="0.8rem"
                  mb={-0.7}
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
      <Link href="/safelock">
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
          <ThumbUpAltOutlinedIcon
            style={{ color: "#7CB9E8", fontSize: "1.7rem" }}
          />
          <Box>
            <Typography
              variant="h6"
              fontWeight={600}
              fontSize="0.8rem"
              mb={-0.7}
              color="#7CB9E8"
            >
              Create a safelock
            </Typography>
            <Typography variant="p" fontSize="0.7rem" color="black">
              Avoid spending temptations. Tap to create a Safelock
            </Typography>
          </Box>
        </Box>
      </Link>
      <div style={{ margin: "40px 0" }}>
        <Typography variant="h6" fontSize="0.7rem" mb={1}>
          RECENT ACTIVITIES
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            border: "1px solid rgb(224, 222, 222)",
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
          <ReceiptIcon style={{ color: "#213555", fontSize: "2rem" }} />
          <Box>
            <Typography
              variant="h6"
              fontSize="0.7rem"
              mb={-0.7}
              color="#213555"
            >
              Just registered
            </Typography>
            <Typography variant="p" fontSize="0.7rem" color="#213555">
              3 yrs ago
            </Typography>
          </Box>
        </Box>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              sx={{
                fontSize: "0.9rem",
                color: "#0066b2",
                mt: "10px",
                pl: 0,
              }}
              onClick={toggleDrawer(anchor, true)}
            >
              view more activities
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
      </div>
    </Box>
  );
};
export default Home;
