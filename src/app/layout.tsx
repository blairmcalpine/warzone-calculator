import "~/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "~/lib/utils";
import type { ReactNode } from "react";
import { Metadata } from "next";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Warzone Point Calculator",
  description:
    "Calculate how many kills are needed to reach match point for your team in Warzone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
