"use client";

import { useGlobalContext } from "@/components/context/context";
import Link from "next/link";
const { Box, Typography, Button } = require("@mui/material");
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
  const { safeColor } = useGlobalContext();
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  useEffect(() => {
    if (session.status === "loading") {
      <p>Loading...</p>;
    }

    if (session.status === "authenticated") {
      router?.push("/");
    }
  }, [session.status, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
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
          Login to your account
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "0.85rem",
            textAlign: "center",
          }}
        >
          Securely login to your YuboVest
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
            Email
          </label>
          <input
            type="text"
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
            log in
          </button>
          {error && error}
        </form>
      </Box>
      <Link
        href="/register"
        style={{
          color: "#fff",
          fontSize: "0.85rem",
          marginTop: "30px",
        }}
      >
        You do not have an account? Register
      </Link>
    </Box>
  );
};
export default Login;
