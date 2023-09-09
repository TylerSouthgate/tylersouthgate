/* eslint-disable react-hooks/exhaustive-deps */

import useWindowSize from "@/app/hooks/useWindowSize";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Content from "./content";
import RandomText from "../../atoms/randomText";

const About = () => {
  const dimentions = useWindowSize();
  const elementRef = useRef<HTMLDivElement>(null);
  const [aboutTextHeight, setAboutTextHeight] = useState<number>(0);
  const [fixedTop, setFixedTop] = useState<boolean>(false);
  const [aboutTop, setAboutTop] = useState<number>(500);

  const ranTezxt = Array.from({
    length: 100,
  }).map((_, index) => {
    return <RandomText testString={"?"} />;
  });

  useEffect(() => {
    if (dimentions.scrollTop >= dimentions.height) {
      if (dimentions.scrollTop >= dimentions.height * 1.5 - aboutTextHeight) {
      } else {
        setFixedTop(true);
        setAboutTop(dimentions.height / 2 - aboutTextHeight / 2);
      }
    } else if (dimentions.scrollTop < dimentions.height) {
      setFixedTop(false);
    }
  }, [dimentions]);

  useLayoutEffect(() => {
    setAboutTextHeight(
      (elementRef.current?.offsetHeight && elementRef.current?.offsetHeight) ||
        0
    );
  }, [dimentions]);

  return (
    <div
      className="hp relative bg-black z-[70]"
      style={{
        overflow: "hidden",
      }}
    >
      {ranTezxt}
      <div
        ref={elementRef}
        className="w-1/2"
        style={{
          position: fixedTop ? "fixed" : "unset",
          top: `${aboutTop}px`,
          color: fixedTop ? "#FFFFFF" : "#333333",
          transition: "color 1s",
          overflow: "hidden",
        }}
      >
        <Content />
      </div>
    </div>
  );
};
export default About;
