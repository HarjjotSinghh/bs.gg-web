import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Archivo } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: "variable",
  display: "swap",
  fallback: ["sans-serif"],
  subsets: ["latin-ext"]
});

export const metadata: Metadata = {
  title: "BS.GG",
  description: "BS.GG Website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
