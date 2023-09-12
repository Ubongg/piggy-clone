import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/components/theme/theme";
import Sidebar from "@/components/sidebar/Sidebar";

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
          <div className="container">
            <Sidebar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
