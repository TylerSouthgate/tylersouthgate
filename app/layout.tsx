"use client";

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
    {
      path: "../public/fonts/Mona Sans/TTF/Mona-Sans-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Mona Sans/TTF/Mona-Sans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans",
});

const monaSansCondensed = localFont({
  src: [
    {
      path: "../public/fonts/Mona Sans/TTF/Mona-Sans-LightNarrow.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Mona Sans/TTF/Mona-Sans-MediumNarrow.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Mona Sans/TTF/Mona-Sans-BoldNarrow.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mona-sans-condensed",
});

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const size = useWindowSize();
  const [selectedSliderIndex, setSelectedSliderIndex] = useState<number>(-1);
  const [pageTheme, setPageTheme] = useState<themeTypes>("BLACK");
  const slideCount: number = Math.floor(size.width / 15);
  const [themeColors, setThemeColors] = useState<Array<string>>(["", "", ""]);
  const sliders = Array.from({
    length: (slideCount && slideCount) || 10,
  }).map((_, index) => {
    return (
      <div key={`${index}_slider`} className="flex-grow relative z-[5]">
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
        className={`${monaSans.variable} ${monaSansCondensed.variable} ease-in-out duration-500 relative z-0 relative`}
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
          <div className="z-5">
            <div className=" z-[10]">
              <div
                className="flex fixed w-[99.9%] overflow-hidden"
                style={{ height: size.height - 30 + "px" }}
              >
                {sliders}
              </div>
            </div>
            <div className="flex justify-center z-[20]">
              <div className="w-full">{children}</div>
            </div>
          </div>
        </PageDefContext.Provider>
      </body>
    </html>
  );
}
