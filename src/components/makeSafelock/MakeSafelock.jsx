import { Box, Typography, Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useGlobalContext } from "../context/context";
import React from "react";

const MakeSafelock = ({ toggleCreateSafelockDrawer, anchor }) => {
  const theme = useTheme();
  const { safeColor, greyBorder } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 450,
        height: "100vh",
        padding: "30px 25px",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
        },
      }}
      role="presentation"
      onKeyDown={toggleCreateSafelockDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          cursor: "pointer",
          fontSize: "2.5rem",
          color: safeColor,
        }}
        onClick={toggleCreateSafelockDrawer(anchor, false)}
      >
        <CloseIcon style={{ fontSize: "2rem" }} />
      </Box>
      <Box
        sx={{
          my: "30px",
        }}
      >
        <Typography
          variant="h6"
          color={safeColor}
          sx={{
            fontSize: "1.4rem",
            fontWeight: 600,
          }}
        >
          How long do you want to lock funds?
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "0.9rem",
          }}
        >
          Select a duration that you want to lock your funds & earn upfront
          interests of up to 35.6%
        </Typography>
      </Box>
    </Box>
  );
};
export default MakeSafelock;
