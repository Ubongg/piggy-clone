"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    otherColor: {
      main: "#999",
    },
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
