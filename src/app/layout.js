import "./globals.css";
import { Inter } from "next/font/google";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/components/theme/theme";
import Sidebar from "@/components/sidebar/Sidebar";
import { AppProvider } from "@/components/context/context";
import BottomNav from "@/components/bottomNav/BottomNav";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YuboVest",
  description: "PiggyVest type shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <AppProvider>
              <Box sx={{ display: "flex" }}>
                <Sidebar />
                {children}
                <BottomNav />
              </Box>
            </AppProvider>
          </ThemeProvider>
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
