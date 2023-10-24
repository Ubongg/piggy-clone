import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/context";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

const Withdraw = ({ toggleWithdrawDrawer, anchor }) => {
  const session = useSession();
  const theme = useTheme();
  const { flexColor, mutateWithdrawals, balancesData } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const withdrawalAmount = e.target[0].value;
    const password = e.target[1].value;

    const balance = balancesData?.find((balance) => {
      return (
        balance.accountName === "flex" &&
        balance.email === session.data.user.email
      );
    });

    if (balance.accountBalance > withdrawalAmount) {
      if (withdrawalAmount >= 1000) {
        try {
          const response = await fetch("/api/withdrawals", {
            method: "POST",
            body: JSON.stringify({
              withdrawalAmount,
              password,
              email: session?.data.user.email,
            }),
          });

          if (response.status === 401) {
            // Unauthorized: Incorrect password
            throw new Error("Unauthorized: Incorrect password");
          }

          mutateWithdrawals();
          toast.success("Withdrawal successful");
          e.target.reset();
        } catch (error) {
          console.log(error);
          toast.error("Incorrect password");
        }
      } else {
        toast.error("Withdrawal amount should be at least N1000");
      }
    } else {
      toast.error("Insufficient funds");
    }
  };

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
          Withdrawal Amount
        </label>
        <input
          type="number"
          placeholder="25000"
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
          placeholder="Your YuboVest Password"
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
