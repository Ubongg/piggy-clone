"use client";

import React, { useState, useContext } from "react";
import Activities from "../activities/Activities";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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

  const activitiesList = (anchor) => (
    <Activities
      toggleActivitiesDrawer={toggleActivitiesDrawer}
      anchor={anchor}
    />
  );

  return (
    <AppContext.Provider
      value={{
        activities,
        toggleActivitiesDrawer,
        topUp,
        withdraw,
        toggleTopUpDrawer,
        toggleWithdrawDrawer,
        activitiesList,
        createSafelock,
        aboutSafelock,
        toggleAboutSafelockDrawer,
        toggleCreateSafelockDrawer,
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
