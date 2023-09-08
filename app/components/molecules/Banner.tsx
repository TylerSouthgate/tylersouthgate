import ThemeSettings from "../atoms/themeSettings";

const Banner = () => {
  return (
    <div className="fixed flex w-full bg-white shadow-xl p-2 block z-50">
      <div className="flex-grow">
        <small className="opacity-75">&copy; 2023 tylersouthgate.com</small>{" "}
      </div>
    </div>
  );
};

export default Banner;
