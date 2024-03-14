import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { UserStoreProvider } from "@/components/providers/user/userStoreProvider";
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
    <html lang="es">
      <UserStoreProvider>
        <UserProvider>
          <body className={`${inter.className} touch-pan-y`}>
            <NavBar />
            {children}
          </body>
        </UserProvider>
      </UserStoreProvider>
    </html>
  );
};

export default RootLayout;
