import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from "@nextui-org/system";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Preview Dashboard",
  description: "Created using Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavBar></NavBar>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
