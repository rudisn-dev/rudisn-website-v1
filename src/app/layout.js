"use client";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/style.css";
import useMagneticHover from "@/hooks/useMagneticHover";
import ScrollTopBtn from "@/utils/ScrollTopBtn";
import { useEffect } from "react";
import ThemeSwitch from "@/components/common/Theme";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "@/components/header/NavBar";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }) {
  useMagneticHover();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <ThemeSwitch />
        <ScrollTopBtn />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-PP6G83BBBL" />
    </html>
  );
}
