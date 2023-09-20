"use client";

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SavingsIcon from "@mui/icons-material/Savings";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Link from "next/link";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#213555",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#27374D",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List sx={{ margin: "20px 0" }}>
          {["YuboVest"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                  onClick={() => setOpen(!open)}
                >
                  <MenuIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    opacity: open ? 1 : 0,
                    color: "white",
                  }}
                  primaryTypographyProps={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {["Home", "Savings"].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{ display: "block", marginBottom: "15px" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "initial",
                  px: 2.5,
                }}
              >
                <Link
                  href={text === "Home" ? "/" : "/savings"}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: "white",
                    }}
                  >
                    {text === "Home" ? <HomeIcon /> : <SavingsIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0, color: "white" }}
                    primaryTypographyProps={{
                      fontWeight: 500,
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{ marginTop: "auto", marginBottom: "20px" }}>
          {["Logout"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0, color: "white" }}
                  primaryTypographyProps={{
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
