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

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const size = useWindowSize();
  const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(-1);
  const [pageTheme, setPageTheme] = useState<themeTypes>("RED");
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
        className={`${inter.className} ease-in-out duration-500 relative z-0 relative`}
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
        </PageDefContext.Provider>
      </body>
    </html>
  );
}
