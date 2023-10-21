"use client";

import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";

const AutoLogout = () => {
  const session = useSession();

  // function to check for inactivity and log out
  const checkForInactivity = () => {
    // get expire time from local storage
    const expireTime = localStorage.getItem("expireTime");

    // if expire time is earlier than now, log out
    if (session.status === "authenticated" && expireTime < Date.now()) {
      signOut();
    }
  };

  // function to update expire time
  const updateExpireTime = () => {
    // set expire time to 2 min from now
    const expireTime = Date.now() + 120000;

    // set expire time in local storage
    localStorage.setItem("expireTime", expireTime);
  };

  // set interval to check for inactivity
  useEffect(() => {
    // check for inactivity every 1 seconds
    const interval = setInterval(() => {
      checkForInactivity();
    }, 1000);

    // clear interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  // update expire time on any user activity
  useEffect(() => {
    // set initial expire time
    updateExpireTime();

    // set event listeners
    window.addEventListener("beforeunload", signOut);
    window.addEventListener("click", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);

    // clean up
    return () => {
      window.removeEventListener("beforeunload", signOut);
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("mousemove", updateExpireTime);
    };
  }, []);
  return <div></div>;
};

export default AutoLogout;
