import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/context";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const Withdraw = ({ toggleWithdrawDrawer, anchor }) => {
  const session = useSession();
  const theme = useTheme();
  const { flexColor, mutateWithdrawals } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const withdrawalAmount = e.target[0].value;
    const password = e.target[1].value;

    try {
      await fetch("/api/withdrawals", {
        method: "POST",
        body: JSON.stringify({
          withdrawalAmount,
          password,
          email: session?.data.user.email,
        }),
      });
      mutateWithdrawals();
      e.target.reset();
      toast.success("Money Withdrawn");
    } catch (error) {
      console.log(error);
    }
  };

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
          withdrawalAmount
        </label>
        <input
          type="number"
          placeholder="withdrawalAmount"
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
            background: flexColor,
            border: "none",
            color: "#fff",
            textTransform: "uppercase",
            height: "50px",
            cursor: "pointer",
          }}
        >
          Withdraw
        </button>
      </form>
    </Box>
  );
};
export default Withdraw;
