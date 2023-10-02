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
        width: 450,
        padding: "30px",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
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
        }}
        onClick={toggleAboutSafelockDrawer(anchor, false)}
      >
        <CloseIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Image
          src="/assets/safelock.png"
          width={250}
          height={250}
          alt=""
          style={{ marginTop: "30px" }}
        />
        <Typography
          variant="h6"
          color={safeColor}
          sx={{
            fontSize: "1.4rem",
            fontWeight: 600,
            my: "30px",
          }}
        >
          What is Safelock?
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "1rem",
            mb: "30px",
          }}
        >
          Safelock allows you to set money aside for a fixed period of time
          without having access to it until maturity. It's like having your own
          custom fixed deposit.
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            mt: "50px",
            py: "10px",
            fontWeight: 600,
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
