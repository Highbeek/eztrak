import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolageFont = Bricolage_Grotesque({
  variable: "--bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eztrak",
  description: "software solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body
        className={`${geistSans.variable} ${bricolageFont.variable} antialiased min-h-screen`}
      >
        <div className="">
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
