"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "./components/atoms/header";
import useWindowSize from "./hooks/useWindowSize";
import usePrevious from "./hooks/usePrevious";

const Home = () => {
  const [aboutTextHeight, setAboutTextHeight] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [aboutTop, setAboutTop] = useState<number>(500);
  const size = useWindowSize();
  const [fixedTop, setFixedTop] = useState<boolean>(false);

  useEffect(() => {
    if (size.scrollTop >= size.height) {
      if (size.scrollTop >= size.height * 1.5 - aboutTextHeight) {
      } else {
        setFixedTop(true);
        setAboutTop(size.height / 2 - aboutTextHeight / 2);
      }
    } else if (size.scrollTop < size.height) {
      setFixedTop(false);
    }
    setScrollTop(size.height / 2 - 300 - 0.25 * size.scrollTop);
  }, [size]);
  useLayoutEffect(() => {
    setAboutTextHeight(
      (elementRef.current?.offsetHeight && elementRef.current?.offsetHeight) ||
        0
    );
  }, [size]);

  return (
    <>
      <div className="hp relative z-[30]">
        <div className="inner_cont">
          <div
            style={{
              position: "fixed",
              top: `${scrollTop}px`,
            }}
          >
            <Header title="welcome" />
            <p className="ml-[42px] w-[200px] float-left">
              Welcome to tylersouthgate.com, the home of.. well, me!
              <br />
              Take some time and have a look around, not that there&#39;s much
              to see, you understand!
            </p>
          </div>
        </div>
      </div>
      <div
        className="hp relative bg-black z-[70]"
        style={{
          overflow: "hidden",
        }}
      >
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
          <p>
            Born and brought up in Ipswich, a town in the heart of Suffolk,
            England in or around the 1970&#39;s. TS managed to avoid all the
            normal things that people did, like getting a job or a pension and
            instead pursued a life of nail biting unpredictability.
          </p>
          <p>
            There were bands and guitars, bikes and cars. Mad hat trips around
            Europe and a gig at a collage in Germany, which was very strange. A
            little too much Wiliam Gibson, something by the Police,
            bandana&#39;s that were way too small (they gave him a headache),
            jeans from a pear in SanFran and too many horses. Really, WAY too
            many horses.
          </p>
          <p>
            The years were packed with couch surfing, penny scrounging
            DJ&#39;ing and twenty foot mural painting. Somewhere along the way
            he learned how to code and went with the flow. A flow that went, as
            it turns out, all the way to India. He finally made his way home,
            some twenty years later, and is now tending an old Victorian house
            in a small market town on the Norfolk borders with his loving wife
            and daughter.
          </p>
        </div>
      </div>
      <div
        className=" h-[100px] parallax-container shadow-xl z-[150]"
        style={{
          backgroundImage: `url("/images/20230811_195050.jpg")`,
          backgroundPosition: `center ${scrollTop}px`,
        }}
      >
        <div className="blurBar">
          <p>Some Shops</p>
        </div>
      </div>
      <div
        className="hp bg-white relative z-[140]"
        style={{
          overflow: "hidden",
        }}
      ></div>
    </>
  );
};

export default Home;
