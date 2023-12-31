import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useGlobalContext } from "../context/context";

const SafeBalance = ({ balance }) => {
  const { safeColor, safelocksData, balancesData, mutateBalances } =
    useGlobalContext();

  const updateSafelockBalance = async (id) => {
    const safelockBalance = safelocksData?.reduce((sum, safelock) => {
      if (safelock.status === "ongoing") {
        return sum + safelock.amount;
      }
      return sum;
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
    updateSafelockBalance(balance._id);
  }, [safelocksData]);

  return (
    <Box>
      <Typography
        variant="h4"
        fontSize="2.4rem"
        color={safeColor}
        fontWeight={600}
      >
        N{balance.accountBalance.toLocaleString()}
      </Typography>
    </Box>
  );
};
export default SafeBalance;
