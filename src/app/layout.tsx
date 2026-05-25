import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "One's Own",
  description: "Dreamy Band EPK",
};

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} h-full antialiased`}>
      <body className="min-h-full min-w-full overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
