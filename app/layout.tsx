import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reservá tu cancha",
  description: "Hora de salir a la cancha con RTC",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden touch-pan-y`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
