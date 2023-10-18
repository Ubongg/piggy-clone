import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../context/context";
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { useSession } from "next-auth/react";
import "@/app/globals.css";
import { toast } from "react-toastify";

const TopUpFlex = ({ toggleTopUpDrawer, anchor }) => {
  const session = useSession();
  const theme = useTheme();
  const {
    flexColor,
    balancesData,
    mutateBalances,
    mutateFlexes,
    mutateActivities,
  } = useGlobalContext();

  const publicKey = "pk_test_e3992992a05fe03a93bd935c8a27c4eee2347379";
  const [email, setEmail] = useState(session?.data.user.email);
  const [name, setName] = useState(session?.data.user.name);
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState(0);

  const onPaymentSuccess = async () => {
    const balance = balancesData?.find((balance) => {
      return (
        balance.accountName === "flex" &&
        balance.email === session.data.user.email
      );
    });

    const newBalance = balance.accountBalance + Number(amount);

    try {
      await fetch(`/api/balances/${balance._id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...balancesData,
          accountBalance: newBalance,
        }),
      });
      mutateBalances();
    } catch (error) {
      console.log("Error updating flex balance ");
    }

    try {
      await fetch(`/api/flexes`, {
        method: "POST",
        body: JSON.stringify({
          amount,
          title: "Flex Credited",
          type: "credit",
          email: session.data.user.email,
        }),
      });
      mutateFlexes();
    } catch (error) {
      console.log("Error creating flex");
    }

    try {
      await fetch(`/api/activities`, {
        method: "POST",
        body: JSON.stringify({
          amount,
          accountName: "flex",
          title: "Flex Credited",
          type: "credit",
          email: session.data.user.email,
        }),
      });
      mutateActivities();
    } catch (error) {
      console.log("Error creating flex");
    }
  };

  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      onPaymentSuccess();
      setPhone("");
      setAmount(0);
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
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
        onClick={toggleTopUpDrawer(anchor, false)}
      >
        <CloseIcon style={{ fontSize: "2rem" }} />
      </Box>
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label
          style={{
            margin: "5px 0",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
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
          onChange={(e) => setName(e.target.value)}
        />
        <label
          style={{
            margin: "5px 0",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          Email
        </label>
        <input
          type="text"
          id="email"
          value={email}
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
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          style={{
            margin: "5px 0",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          Phone
        </label>
        <input
          type="text"
          id="phone"
          value={phone}
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
          onChange={(e) => setPhone(e.target.value)}
        />
        <label
          style={{
            margin: "5px 0",
            fontSize: "0.75rem",
            fontWeight: 600,
          }}
        >
          Amount to Top Up
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
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
          onChange={(e) => setAmount(e.target.value)}
        />
        <PaystackButton className="paystack-button" {...componentProps} />
      </div>
    </Box>
  );
};
export default TopUpFlex;
