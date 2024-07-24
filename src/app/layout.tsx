import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "DevLinks",
  description: "All your dev links in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen flex flex-col bg-dev-very-light-gray">
        <Navbar />
        <div className="flex flex-1 overflow-hidden mt-6 mx-6">
          <Sidebar />
          <main className="flex-1 overflow-y-auto ml-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
