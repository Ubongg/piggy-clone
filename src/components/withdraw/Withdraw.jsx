import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/context";

const Withdraw = ({ toggleWithdrawDrawer, anchor }) => {
  const theme = useTheme();
  const { flexColor } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 450,
        height: "100vh",
        padding: "30px 25px",
        [theme.breakpoints.down("xs")]: {
          width: "100vw",
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
          color: flexColor,
        }}
        onClick={toggleWithdrawDrawer(anchor, false)}
      >
        <CloseIcon style={{ fontSize: "2rem" }} />
      </Box>
      Withdraw
    </Box>
  );
};
export default Withdraw;
