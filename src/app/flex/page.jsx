import { Box, Card, Container, Stack, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import Link from "next/link";

const Home = () => {
  return (
    <Box
      sx={{
        padding: "38px 30px",
        flexGrow: 1,
        maxWidth: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} fontSize="1.8rem">
            Ubong,
          </Typography>
          <Typography variant="p">Save some money today!</Typography>
        </Box>
        <AccountCircleIcon style={{ fontSize: "2.3rem", cursor: "pointer" }} />
      </Box>
      <Stack direction="row" spacing={3} my={10}>
        <Link href="/savings">
          <Card
            sx={{
              display: "flex",
              pl: "20px",
              alignItems: "center",
              width: "250px",
              height: "150px",
              gap: "0.7rem",
              background: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ShieldOutlinedIcon style={{ fontSize: "2rem" }} />
            <Box>
              <Typography variant="p">Total Savings</Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                N0.00
              </Typography>
            </Box>
          </Card>
        </Link>
        <Link href="/flex">
          <Card
            sx={{
              display: "flex",
              pl: "20px",
              alignItems: "center",
              width: "250px",
              height: "150px",
              gap: "0.7rem",
              background: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ShieldOutlinedIcon style={{ fontSize: "2rem" }} />
            <Box>
              <Typography variant="p">Flex Naira</Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                N0.00
              </Typography>
            </Box>
          </Card>
        </Link>
        <Link href="/safelock">
          <Card
            sx={{
              display: "flex",
              pl: "20px",
              alignItems: "center",
              width: "250px",
              height: "150px",
              gap: "0.7rem",
              background: "skyblue",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ShieldOutlinedIcon style={{ fontSize: "2rem" }} />
            <Box>
              <Typography variant="p">Safelock</Typography>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                N0.00
              </Typography>
            </Box>
          </Card>
        </Link>
      </Stack>
    </Box>
  );
};
export default Home;
