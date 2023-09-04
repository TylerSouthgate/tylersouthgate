type themeTypes = "RED" | "GREEN" | "BLUE" | "BLACK";

interface PageDefContextValue {
  selectedSliderIndex: number;
  setSelectedSliderIndex: (val: number) => void;
  pageTheme: themeTypes;
  setPageTheme: (val: themeTypes) => void;
  slideCount: number;
  themeColors: Array<string>;
}

export type { PageDefContextValue, themeTypes };
