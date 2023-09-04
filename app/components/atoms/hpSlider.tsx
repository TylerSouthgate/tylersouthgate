import { useContext, useEffect, useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";
import PageDefContext from "@/app/context/pageContext";

interface IProps {
  intNum: number;
}

const HpSlider = ({ intNum }: IProps) => {
  const pageDef = useContext(PageDefContext);
  const [thisHeight, setThisHeight] = useState<number>(0);
  const [bg, setbg] = useState<string>(pageDef?.themeColors[0] as string);
  const [hig, setHig] = useState<number>(250);
  const [thisDown, setDown] = useState<number>(0);
  const [thisOpacity, setThisOpacity] = useState<number>(0);
  const size = useWindowSize();
  const [witcher, setWitcher] = useState<boolean>(false);

  useEffect(() => {
    if (pageDef?.selectedSliderIndex === intNum) {
      setbg("#000000");
    } else {
      setbg(pageDef?.themeColors[0] as string);
    }
  }, [pageDef?.selectedSliderIndex, pageDef?.themeColors]);

  useEffect(() => {
    const num: number = Math.floor(Math.random() * size.height - 50);
    setThisHeight(num);
    setDown(num);
    setHig(num <= 250 ? num : hig);
    setThisOpacity(0.1);
    const slide = setInterval(() => {
      setWitcher(!witcher);
    }, Math.floor(Math.random() * 2000 + 5));
    return () => clearInterval(slide);
  }, [witcher]);

  const moOut = () => {
    pageDef?.setSelectedSliderIndex(-1);
  };

  const moOver = () => {
    pageDef?.setSelectedSliderIndex(intNum);
  };

  return (
    <div
      onMouseOver={moOver}
      onMouseOut={moOut}
      className="flex-grow relative z-[10]"
    >
      <div
        className="w-full ease-in-out duration-1000 rounded-b-full"
        style={{
          height: thisHeight + "px",
          opacity: thisOpacity,
          backgroundColor: bg,
        }}
      ></div>
      <div
        className="absolute w-[100%] rounded-full -mt-10 ease-in-out duration-500"
        style={{
          top: thisDown + "px",
          opacity: 0.1,
          backgroundColor: bg,
          height: hig + "px",
        }}
      />
    </div>
  );
};
export default HpSlider;
