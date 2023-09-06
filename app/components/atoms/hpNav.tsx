import PageDefContext from "@/app/context/pageContext";
import { EnvelopeIcon, HeartIcon } from "@heroicons/react/20/solid";
import { WrenchIcon } from "@heroicons/react/24/solid";
import { IdentificationIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";

const HpNav = () => {
  const pageDef = useContext(PageDefContext);
  const pathname = usePathname();
  const mouOver = () => {
    console.log("mouOver");
    const ran: number = pageDef?.slideCount || 10;
    const high: number = Math.floor(Math.random() * ran + 5);
    pageDef?.setSelectedSliderIndex(high);
  };
  const mouOut = () => {
    console.log("mouOut");
    pageDef?.setSelectedSliderIndex(-1);
  };

  const active = "hover:opacity-100 opacity-100";
  const inactive = "hover:opacity-100 opacity-50";

  return (
    <div
      className="flex w-full relative z-[40] border p-4 mt-10 rounded-lg shadow-xl mt-10"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div
        className="pr-5 cursor-pointer "
        onMouseOut={mouOut}
        onMouseOver={mouOver}
      >
        <Link href={"/"} className={pathname === "/" ? active : inactive}>
          <HeartIcon className="w-6 inline" /> home
        </Link>
      </div>
      <div
        className="pr-5 cursor-pointer "
        onMouseOut={mouOut}
        onMouseOver={mouOver}
      >
        <Link
          href={"/about"}
          className={pathname === "/about" ? active : inactive}
        >
          <IdentificationIcon className="w-6 inline" /> about it
        </Link>
      </div>
      <div
        className="pr-5 cursor-pointer "
        onMouseOut={mouOut}
        onMouseOver={mouOver}
      >
        <Link
          href={"/contact"}
          className={pathname === "/contact" ? active : inactive}
        >
          <EnvelopeIcon className="w-6 inline" /> contact
        </Link>
      </div>
      <div
        className="pr-5 cursor-pointer "
        onMouseOut={mouOut}
        onMouseOver={mouOver}
      >
        <Link
          href={"/work"}
          className={pathname === "/work" ? active : inactive}
        >
          <WrenchIcon className="w-6 inline" /> work
        </Link>
      </div>
    </div>
  );
};
export default HpNav;
