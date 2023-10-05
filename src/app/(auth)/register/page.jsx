"use client";

import { useGlobalContext } from "@/components/context/context";
import Link from "next/link";
const { Box, Typography, Button } = require("@mui/material");

const Register = () => {
  const { safeColor } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        background: "#27374D",
        px: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "450px",
          width: "100%",
          background: "#fff",
          p: "30px",
          border: "1px solid rgb(224, 222, 222)",
          borderBottomRightRadius: "1.5rem",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      >
        <Typography
          variant="h6"
          color={safeColor}
          fontWeight={600}
          sx={{ textAlign: "center" }}
        >
          Create a Secure Account
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "0.85rem",
            textAlign: "center",
          }}
        >
          Welcome to the future of Savings & Investments
        </Typography>
        <form
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{
              outline: "none",
              padding: "17px 15px 19px",
              border: "none",
              background: "#edf2f7",
              marginBottom: "30px",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "0.5rem",
            }}
          />
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Email Address"
            required
            style={{
              outline: "none",
              padding: "17px 15px 19px",
              border: "none",
              background: "#edf2f7",
              marginBottom: "30px",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "0.5rem",
            }}
          />
          <label
            style={{
              margin: "5px 0",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            Password
          </label>
          <input
            type="text"
            placeholder="Password"
            required
            style={{
              outline: "none",
              padding: "17px 15px 19px",
              border: "none",
              background: "#edf2f7",
              marginBottom: "30px",
              width: "100%",
              fontSize: "1rem",
              borderRadius: "0.5rem",
            }}
          />
          <Button
            variant="contained"
            sx={{
              py: "12px",
              fontWeight: 600,
              fontSize: "1rem",
              mt: "20px",
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              borderBottomLeftRadius: 0,
              background: safeColor,
            }}
          >
            create account
          </Button>
        </form>
      </Box>
      <Link
        href="/login"
        style={{
          color: "#fff",
          fontSize: "0.85rem",
          marginTop: "30px",
        }}
      >
        Already have an account? Login
      </Link>
    </Box>
  );
};
export default Register;
