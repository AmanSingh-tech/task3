import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task1",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className} style={{ backgroundColor: "white" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}