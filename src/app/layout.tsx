import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ReduxProvider } from "./redux/provider";
import ThemeContextProvider from "./context/ThemeContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iaBilet.ro: Bilete la concerte, spectacole, teatru, sport și standup",
  description:
    "iaBilet.ro: Bilete la concerte, spectacole, teatru, sport și standup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} layout-color`}>
        <ThemeContextProvider>
          <ReduxProvider>
            <Header />
            <main className="page-template">{children}</main>
            <Footer />
          </ReduxProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
