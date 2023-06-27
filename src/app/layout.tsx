import "./globals.css";
import { Roboto } from "next/font/google";
import { AppHeader } from "@/components/layout/AppHeader";
import { AppFooter } from "@/components/layout/AppFooter";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "PTN Sports",
  description: "Updating information about sports tournaments of PTN Global",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} bg-white dark:bg-gray-900`}>
        <AppHeader />
        {children}
        <AppFooter />
        <Analytics />
      </body>
    </html>
  );
}
