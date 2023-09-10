"use client";

import Intro from "./components/organisms/intro";
import ImageBanner from "./components/organisms/imageBanner";
import About from "./components/organisms/about";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect, useState } from "react";
import Likes from "./components/organisms/likes";
import NotLikes from "./components/organisms/notLikes";

const Home = () => {
  const dimentions = useWindowSize();
  const [canRender, serCanRender] = useState<boolean>(false);
  useEffect(() => {
    if (dimentions.width !== 0) {
      serCanRender(true);
    } else {
      serCanRender(false);
    }
  }, [dimentions]);
  return (
    <>
      {canRender ? (
        <>
          <Intro />
          <About />
          <ImageBanner
            image={"/images/20230811_195050.jpg"}
            tagLine={"Some Shops"}
          />
          <Likes />
          <NotLikes />
          <div
            className="hp bg-white relative z-[140]"
            style={{
              overflow: "hidden",
            }}
          ></div>
        </>
      ) : null}
    </>
  );
};

export default Home;
