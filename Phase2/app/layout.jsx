import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/api/components/nav/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NSK",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
