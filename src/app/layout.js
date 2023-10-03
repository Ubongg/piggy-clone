import "./globals.css";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/components/theme/theme";
import Sidebar from "@/components/sidebar/Sidebar";
import { AppProvider } from "@/components/context/context";
import BottomNav from "@/components/bottomNav/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YuboVest",
  description: "PiggyVest type shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <Box sx={{ display: "flex" }}>
              <Sidebar />
              {children}
              <BottomNav />
            </Box>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
