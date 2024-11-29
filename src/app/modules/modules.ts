export type Options = {
  size?: "small" | "medium" | "large";
  color?: "red" | "green" | "blue" | "yellow" | "white" | "black";
  orientation?: "landscape" | "portrait";
  safe_search?: '1' | '2' | '3';
  minDate?: Date;
  maxDate?: Date;
};

export type SizeValue = "small" | "medium" | "large" | undefined;
export type ColorValue = "red" | "green" | "blue" | "yellow" | "white" | "black" | undefined;
export type OrientationValue = "landscape" | "portrait" | undefined;
export type SafeSearchValue = '1' | '2' | '3' | undefined;
export type FilterValue = SizeValue | ColorValue | OrientationValue | SafeSearchValue | Date | undefined;