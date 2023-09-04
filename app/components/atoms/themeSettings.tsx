import { themes } from "@/app/constants";
import PageDefContext from "@/app/context/pageContext";
import { themeTypes } from "@/app/types";
import { CheckIcon, Cog6ToothIcon } from "@heroicons/react/20/solid";
import { useContext, useState } from "react";

const ThemeSettings = () => {
  const pageDef = useContext(PageDefContext);
  const [show, setShow] = useState<boolean>(false);
  const showMenu = () => {
    setShow(!show);
    console.log("showMenu");
  };
  return (
    <div className="inline-block relative">
      <div
        className="cursor-pointer"
        onClick={() => {
          showMenu();
        }}
      >
        <small>
          <Cog6ToothIcon className="w-4 inline" /> Theme
        </small>
      </div>
      <div className="relative z-[60]">
        {show && (
          <div className="absolute right-[0px] border bg-[#FFFFFF] p-2 rounded-lg text-[#333333] w-[150px] top-[5px] ease-in-out duration-500 shadow-lg ">
            <ul>
              {themes.map((theme, key) => {
                return (
                  <li
                    key={key}
                    className="cursor-pointer"
                    onClick={() => {
                      pageDef?.setPageTheme(theme.theme as themeTypes);
                    }}
                  >
                    {pageDef?.pageTheme === theme.theme ? (
                      <CheckIcon className="w-5 opacity-100 inline" />
                    ) : (
                      <CheckIcon className="w-5 opacity-50 inline" />
                    )}{" "}
                    {theme.theme.toLowerCase()}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default ThemeSettings;
