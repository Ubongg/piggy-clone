import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/context";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Activities = ({ toggleActivitiesDrawer, anchor, debit, credit }) => {
  const theme = useTheme();
  const {
    safeColor,
    activitiesData,
    flexActivities,
    allActivities,
    flexColor,
  } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 450,
        height: "100vh",
        padding: "38px 25px",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
        },
        [theme.breakpoints.down("sm")]: {
          p: "38px 15px",
        },
      }}
      role="presentation"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          cursor: "pointer",
          fontSize: "2.5rem",
          color: allActivities ? "#213555" : flexColor,
        }}
        onClick={toggleActivitiesDrawer(anchor, false)}
      >
        <CloseIcon style={{ fontSize: "2rem" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
          // my: "30px",
          p: "30px 0 70px",
        }}
      >
        <Typography
          variant="h6"
          color={allActivities ? "#213555" : flexColor}
          sx={{
            fontSize: "1.4rem",
            fontWeight: 600,
          }}
        >
          {allActivities ? "All Activities" : "Flex Transactions"}
        </Typography>
        {flexActivities &&
          activitiesData
            ?.filter((activity) =>
              debit
                ? activity.accountName === "flex" && activity.type === "debit"
                : credit
                ? activity.accountName === "flex" && activity.type === "credit"
                : activity.accountName === "flex"
            )
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
                  <AccountBalanceOutlinedIcon
                    style={{
                      color: flexColor,
                      fontSize: "2.5rem",
                      background: "#ffd7e9",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                  />
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
                    <Typography variant="p" fontSize="0.7rem" color="#213555">
                      {formattedDate}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    color={flexColor}
                    sx={{
                      fontWeight: 600,
                      ml: "auto",
                      fontSize: "0.8rem",
                    }}
                  >
                    {activity.amount}
                  </Typography>
                </Box>
              );
            })}

        {flexActivities &&
          activitiesData?.filter((activity) => activity.accountName === "flex")
            .length === 0 && (
            <Typography variant="p" fontSize="0.9rem">
              You have no flex transaction
            </Typography>
          )}

        {allActivities &&
          activitiesData
            ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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
                    <Typography variant="p" fontSize="0.7rem" color="#213555">
                      {formattedDate}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    color={
                      activity.accountName === "flex" ? flexColor : safeColor
                    }
                    sx={{
                      fontWeight: 600,
                      ml: "auto",
                      fontSize: "0.8rem",
                    }}
                  >
                    {activity.amount}
                  </Typography>
                </Box>
              );
            })}
        {allActivities && activitiesData?.length === 0 && (
          <Typography variant="p" fontSize="0.9rem">
            You have no activity
          </Typography>
        )}
      </Box>
    </Box>
  );
};
export default Activities;
