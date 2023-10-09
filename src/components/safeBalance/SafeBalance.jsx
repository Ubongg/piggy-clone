import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { useSession } from "next-auth/react";

const SafeBalance = ({ balance }) => {
  const session = useSession();
  const { safeColor, safelocksData, balancesData, mutateBalances } =
    useGlobalContext();

  const getSafelockBalance = async (id) => {
    const safelockBalance = safelocksData.reduce((sum, safelock) => {
      return safelock.status === "ongoing" && sum + safelock.amount;
    }, 0);

    await fetch(`/api/balances/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...balancesData,
        accountBalance: safelockBalance,
      }),
    });
    mutateBalances();
  };

  useEffect(() => {
    getSafelockBalance(balance._id);
  }, [safelocksData]);

  return (
    <Box>
      <Typography
        variant="h4"
        fontSize="2.4rem"
        color={safeColor}
        fontWeight={600}
      >
        N{balance.accountBalance}
      </Typography>
    </Box>
  );
};
export default SafeBalance;
