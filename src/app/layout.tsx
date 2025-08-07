import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "80s Hair Oil - Premium Hair Care",
  description: "Transform your hair with our premium 80s Hair Oil blend. Luxurious formula for voluminous, healthy hair.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
