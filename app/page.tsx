"use client";

import { useContext, useEffect, useState } from "react";
import HpNav from "./components/atoms/hpNav";
import PageDefContext from "./context/pageContext";
import Header from "./components/atoms/header";
import useWindowSize from "./hooks/useWindowSize";

const Home = () => {
  const pageDef = useContext(PageDefContext);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const size = useWindowSize();
  const fixedTop = size.height / 2 - 300;

  useEffect(() => {
    setScrollTop(size.height / 2 - 300 - 0.25 * size.scrollTop);
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
      <div className="hp relative bg-black z-[70]">
        <p>stuff</p>
      </div>
    </>
  );
};

export default Home;
