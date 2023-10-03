"use client";

import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const safeColor = "#0066b2";
  const greyBorder = "rgb(224, 222, 222)";

  const [open, setOpen] = React.useState(false);

  const [activities, setActivities] = React.useState({
    right: false,
  });
  const [topUp, setTopUp] = React.useState({
    right: false,
  });
  const [withdraw, setWithdraw] = React.useState({
    right: false,
  });
  const [createSafelock, setCreateSafelock] = React.useState({
    right: false,
  });
  const [aboutSafelock, setAboutSafelock] = React.useState({
    right: false,
  });

  const toggleActivitiesDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setActivities({ ...activities, [anchor]: open });
  };

  const toggleTopUpDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTopUp({ ...topUp, [anchor]: open });
  };

  const toggleWithdrawDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setWithdraw({ ...withdraw, [anchor]: open });
  };

  const toggleCreateSafelockDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setCreateSafelock({ ...createSafelock, [anchor]: open });
  };

  const toggleAboutSafelockDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAboutSafelock({ ...aboutSafelock, [anchor]: open });
  };

  return (
    <AppContext.Provider
      value={{
        safeColor,
        open,
        setOpen,
        activities,
        toggleActivitiesDrawer,
        topUp,
        withdraw,
        toggleTopUpDrawer,
        toggleWithdrawDrawer,
        createSafelock,
        aboutSafelock,
        toggleAboutSafelockDrawer,
        toggleCreateSafelockDrawer,
        greyBorder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
