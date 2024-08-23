"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import "remixicon/fonts/remixicon.css";
import "../../../public/assets/css/bootstrap.min.css";
import "../../../public/assets/css/style.css";
import useMagneticHover from "@/hooks/useMagneticHover";
import ScrollTopBtn from "@/utils/ScrollTopBtn";
import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "@/components/header/NavBar";
import Footer from "@/components/Footer/Footer";
import GoogleAdsense from "../common/GoogleAdsense";

export default function RootLayout({ children, isClient }) {
  useMagneticHover();
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  if (isClient) {
    return (
      <>
        <GoogleAdsense />
        <NavBar />
        {children}
        <Footer />
        <ScrollTopBtn />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-PP6G83BBBL" />
      </>
    );
  }

  return (
    <html lang="en">
      <body>
        <GoogleAdsense />
        <NavBar />
        {children}
        <Footer />
        <ScrollTopBtn />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-PP6G83BBBL" />
    </html>
  );
}
