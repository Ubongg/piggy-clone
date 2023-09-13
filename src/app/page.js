import { Box, Card, Container, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Link from "next/link";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        background: "red",
        m: "38px 30px",
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
            Ubong,
          </Typography>
          <Typography variant="p">Save some money today!</Typography>
        </Box>
        <Link href="/account">
          <AccountCircleIcon
            style={{ fontSize: "2.3rem", cursor: "pointer" }}
          />
        </Link>
      </Box>
    </Box>
  );
};
export default Home;
