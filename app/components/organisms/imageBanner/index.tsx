import useWindowSize from "@/app/hooks/useWindowSize";
import { useEffect, useState } from "react";

interface IProps {
  image: string;
  tagLine: string;
}

const ImageBanner = ({ image, tagLine }: IProps) => {
  const [scrollTop, setScrollTop] = useState<number>(0);
  const dimentions = useWindowSize();
  useEffect(() => {
    setScrollTop(dimentions.height / 2 - 300 - 0.25 * dimentions.scrollTop);
  }, [dimentions]);
  return (
    <div
      className=" h-[100px] parallax-container shadow-xl z-[150]"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: `center ${scrollTop}px`,
      }}
    >
      <div className="blurBar">
        <p>{tagLine}</p>
      </div>
    </div>
  );
};

export default ImageBanner;
