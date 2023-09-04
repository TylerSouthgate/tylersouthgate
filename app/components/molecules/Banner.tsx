import ThemeSettings from "../atoms/themeSettings";

const Banner = () => {
  return (
    <div className="fixed flex w-full bg-[#000000] shadow-sm p-1 block z-50">
      <div className="flex-grow">
        <small className="opacity-50">&copy; 2023 tylersouthgate.com</small>{" "}
      </div>
      <ThemeSettings />
    </div>
  );
};

export default Banner;
