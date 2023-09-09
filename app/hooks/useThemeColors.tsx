import { themeTypes } from "../types";
import { themes } from "../constants";

const UseThemeColors = (selected: themeTypes) => {
  let result: Array<string> = [];
  themes.map((theme) => {
    if (theme.theme === selected) {
      result = [theme.config[0].a, theme.config[0].b, theme.config[0].c];
    }
  });
  return result;
};

export default UseThemeColors;
