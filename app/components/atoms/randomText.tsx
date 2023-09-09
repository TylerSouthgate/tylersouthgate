/* eslint-disable react-hooks/exhaustive-deps */

import useWindowSize from "@/app/hooks/useWindowSize";
import { useEffect, useState } from "react";

interface IProps {
  testString: string;
}

const RandomText = ({ testString }: IProps) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const dimentions = useWindowSize();
  const [startPos, setStartPos] = useState<number>(0);
  const [startLeft, setStartLeft] = useState<number>(0);
  const [startSize, setStartSize] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    if (Number(dimentions.width) > 0 && startLeft === 0) {
      setStartPos(Math.floor(Math.random() * 500));
      setStartSize(Math.floor(Math.random() * 400 + 25));
      setStartLeft(Math.floor(Math.random() * Number(dimentions.width)));
      setSpeed(Math.random() * 1);
    }
  }, [dimentions]);

  useEffect(() => {
    setScrollTop(
      dimentions.height / 2 - startPos - speed * dimentions.scrollTop
    );
  }, [dimentions]);

  return (
    <p
      className="text-white text-xl absolute"
      style={{
        top: `${scrollTop}px`,
        left: `${startLeft}px`,
        fontSize: `${startSize}px`,
        opacity: speed - 0.02,
        filter: `blur(5px)`,
      }}
    >
      {testString}
    </p>
  );
};
export default RandomText;
