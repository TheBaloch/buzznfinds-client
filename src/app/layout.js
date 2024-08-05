import { GoogleAnalytics } from "@next/third-parties/google";
import Footer1 from "@/components/footer1/footer1";
import Header from "@/components/header/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-D1X172T33L" />
      <body>
        <>
          <Header />
          {children}
          <Footer1 />
        </>
      </body>
    </html>
  );
}
