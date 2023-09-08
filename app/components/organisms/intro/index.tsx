import { useEffect, useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";

const Intro = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const dimentions = useWindowSize();
  useEffect(() => {
    setScrollTop(dimentions.height / 2 - 300 - 0.25 * dimentions.scrollTop);
  }, [dimentions]);
  return (
    <div className="hp relative z-[30]">
      <div className="inner_cont">
        <div
          style={{
            position: "fixed",
            top: `${scrollTop}px`,
          }}
        >
          <div className="flex w-full relative">
            <h1 className="text-[200px] opacity-25">tylersouthgate</h1>
          </div>
          <p className="ml-[42px] w-[200px] float-left">
            Welcome to tylersouthgate.com, the home of.. well, me!
            <br />
            Take some time and have a look around, not that there&#39;s much to
            see, you understand!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
