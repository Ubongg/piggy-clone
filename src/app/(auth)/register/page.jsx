"use client";

import { useGlobalContext } from "@/components/context/context";
import Link from "next/link";
const { Box, Typography, Button } = require("@mui/material");
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const { safeColor } = useGlobalContext();
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/login?success=Account has been created");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        background: "#213555",
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
          onSubmit={handleSubmit}
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
            type="password"
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
          <button
            style={{
              padding: "12px 0",
              fontWeight: 600,
              fontSize: "0.9rem",
              marginTop: "20px",
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              borderBottomLeftRadius: 0,
              background: safeColor,
              border: "none",
              color: "#fff",
              textTransform: "uppercase",
              height: "50px",
              cursor: "pointer",
            }}
          >
            create account
          </button>
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
