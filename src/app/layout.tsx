import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/globals.css";
import NavBar from "./components/navbar";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MNG ITech",
  description: "Le site web de vos rêves à portée de mains !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
