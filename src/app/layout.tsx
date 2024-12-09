import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Rista dekho",
  description: "Generated by Rista dekho",
};

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
