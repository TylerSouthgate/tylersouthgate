"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PageDefContext from "./context/pageContext";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect, useState } from "react";

import UseThemeColors from "./hooks/useThemeColors";
import { themeTypes } from "./types";
import Banner from "./components/molecules/Banner";
import HpSlider from "./components/atoms/hpSlider";
import localFont from "next/font/local";
const monaSans = localFont({
  src: [
    {
      path: "../public/fonts/Mona Sans/TTF/Mona-Sans-Light.ttf",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/Grosa/Grosa-Medium.woff2",
    //   weight: "600",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/Grosa/Grosa-Bold.woff2",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-mona-sans",
});
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const size = useWindowSize();
  const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(-1);
  const [pageTheme, setPageTheme] = useState<themeTypes>("GREEN");
  const slideCount: number = Math.floor(size.width / 15);
  const [themeColors, setThemeColors] = useState<Array<string>>(["", "", ""]);
  const sliders = Array.from({
    length: (slideCount && slideCount) || 10,
  }).map((_, index) => {
    return (
      <div key={`${index}_slider`} className="flex-grow relative z-[10]">
        <HpSlider intNum={index} />
      </div>
    );
  });
  useEffect(() => {
    setThemeColors(UseThemeColors(pageTheme));
  }, [pageTheme]);

  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ease-in-out duration-500 relative z-0 relative`}
        style={{ background: themeColors[1] }}
      >
        <PageDefContext.Provider
          value={{
            selectedSliderIndex,
            setSelectedSliderIndex,
            pageTheme,
            setPageTheme,
            slideCount,
            themeColors,
          }}
        >
          <div className="curtain font-mona-sans">tyler southgate</div>
          {/*
          <Banner />
          <div className="z-40">
            <div className=" z-[10]">
              <div
                className="flex fixed w-[99.9%] overflow-hidden"
                style={{ height: size.height - 30 + "px" }}
              >
                {sliders}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full md:w-5/6 lg:w-3/4 xl:w-1/2 mx-5">
                {children}
              </div>
            </div>
          </div>
          */}
        </PageDefContext.Provider>
      </body>
    </html>
  );
}
