"use client";

import * as React from "react";
import { Box, Button, Card, Drawer, Typography } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";
import Activities from "@/components/activities/Activities";
import { useTheme } from "@mui/material/styles";
import ProfileButton from "@/components/profileButton/ProfileButton";
import { useGlobalContext } from "@/components/context/context";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AutoLogout from "@/components/autoLogout/AutoLogout";

const Home = () => {
  const session = useSession();
  const router = useRouter();
  const theme = useTheme();
  const {
    activities,
    toggleActivitiesDrawer,
    balancesData,
    totalSavings,
    setFlexActivities,
    setAllActivities,
    activitiesData,
    allActivities,
    flexColor,
    safeColor,
  } = useGlobalContext();

  useEffect(() => {
    setFlexActivities(false);
    setAllActivities(true);
  }, []);

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router?.push("/login");
    }
  }, [session.status, router]);

  if (session.status === "authenticated") {
    return (
      <Box
        sx={{
          width: "100%",
          m: "38px 45px",
          overflowX: "auto",
          [theme.breakpoints.down("sm")]: {
            m: "38px 15px 70px",
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
              {session?.data?.user.name.split(" ")[0]},
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
                  N{totalSavings.toLocaleString()}
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
                {balancesData?.map((balance) => {
                  if (balance.accountName === "flex") {
                    const flexBal = balance.accountBalance;
                    return (
                      <Box key={balance._id}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          N{flexBal.toLocaleString()}
                        </Typography>
                      </Box>
                    );
                  }
                })}
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
                {balancesData?.map((balance) => {
                  if (balance.accountName === "safelock") {
                    const safeBal = balance.accountBalance;
                    return (
                      <Box key={balance._id}>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          N{safeBal.toLocaleString()}
                        </Typography>
                      </Box>
                    );
                  }
                })}
              </Box>
            </Card>
          </Link>
        </Box>
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Box
                onClick={toggleActivitiesDrawer(anchor, true)}
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
                  width: "65%",
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
                open={activities[anchor]}
                onClose={toggleActivitiesDrawer(anchor, false)}
              >
                <Activities
                  toggleActivitiesDrawer={toggleActivitiesDrawer}
                  anchor={anchor}
                />
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
              width: "65%",
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
              flexDirection: "column",
              border: "1px solid rgb(224, 222, 222)",
              gap: "1.2rem",
              borderBottomRightRadius: "0.5rem",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              p: "15px",
              width: "65%",
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            {allActivities &&
              activitiesData
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(0, 5)
                .map((activity) => {
                  const originalDateString = activity.createdAt;
                  const originalDate = new Date(originalDateString);

                  const year = originalDate.getFullYear();
                  const month = String(originalDate.getMonth() + 1).padStart(
                    2,
                    "0"
                  ); // Months are zero-based, so add 1
                  const day = String(originalDate.getDate()).padStart(2, "0");

                  const formattedDate = `${day}-${month}-${year}`;

                  return (
                    <Box
                      key={activity._id}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        width: "100%",
                      }}
                    >
                      {activity.accountName === "flex" ? (
                        <AccountBalanceOutlinedIcon
                          style={{
                            color: flexColor,
                            fontSize: "2.5rem",
                            background: "#ffd7e9",
                            borderRadius: "50%",
                            padding: "10px",
                          }}
                        />
                      ) : (
                        <LockOutlinedIcon
                          style={{
                            color: safeColor,
                            fontSize: "2.5rem",
                            background: "#9fd7fe",
                            borderRadius: "50%",
                            padding: "10px",
                          }}
                        />
                      )}
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          fontSize="0.8rem"
                          mb={-0.7}
                          color="#213555"
                        >
                          {activity.title}
                        </Typography>
                        <Typography
                          variant="p"
                          fontSize="0.7rem"
                          color="#213555"
                        >
                          {formattedDate}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h6"
                        color={
                          activity.accountName === "flex"
                            ? flexColor
                            : safeColor
                        }
                        sx={{
                          fontWeight: 600,
                          ml: "auto",
                          fontSize: "0.8rem",
                        }}
                      >
                        {activity.amount.toLocaleString()}
                      </Typography>
                    </Box>
                  );
                })}
            {allActivities && activitiesData?.length === 0 && (
              <Typography variant="p" fontSize="0.9rem" color="#213555">
                You have no recent activity
              </Typography>
            )}
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
                onClick={toggleActivitiesDrawer(anchor, true)}
              >
                view more activities
              </Button>
              <Drawer
                anchor={anchor}
                open={activities[anchor]}
                onClose={toggleActivitiesDrawer(anchor, false)}
              >
                <Activities
                  toggleActivitiesDrawer={toggleActivitiesDrawer}
                  anchor={anchor}
                />
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <AutoLogout />
      </Box>
    );
  }
};
export default Home;
