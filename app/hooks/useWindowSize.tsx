import { useEffect, useState } from "react";

const UseWindowSize = () => {
  const [windowSize, setWindowSize] = useState<any>({
    width: 0,
    height: 0,
    scrollTop: 0,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollTop: window.scrollY,
      });
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.addEventListener("scroll", handleResize);
    };
  }, []);
  return windowSize;
};
export default UseWindowSize;
