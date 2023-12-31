import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/context";
import Image from "next/image";

const AboutSafelock = ({ toggleAboutSafelockDrawer, anchor }) => {
  const theme = useTheme();
  const { safeColor } = useGlobalContext();

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
      onKeyDown={toggleAboutSafelockDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          color: safeColor,
          cursor: "pointer",
          fontSize: "2.5rem",
        }}
        onClick={toggleAboutSafelockDrawer(anchor, false)}
      >
        <CloseIcon style={{ fontSize: "2rem" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
          textAlign: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            height: "100%",
          }}
        >
          <Image
            src="/assets/safelock.png"
            width={250}
            height={250}
            alt=""
            // style={{ marginTop: "20%" }}
          />
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
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
              What is Safelock?
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "1rem",
              }}
            >
              Safelock allows you to set money aside for a fixed period of time
              without having access to it until maturity. It is like having your
              own custom fixed deposit. Lock funds for at least 10 days.
            </Typography>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            py: "12px",
            fontWeight: 600,
            mt: "auto",
            borderBottomRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
            borderTopRightRadius: "0.5rem",
            borderBottomLeftRadius: 0,
          }}
          onClick={toggleAboutSafelockDrawer(anchor, false)}
        >
          start now
        </Button>
      </Box>
    </Box>
  );
};
export default AboutSafelock;
