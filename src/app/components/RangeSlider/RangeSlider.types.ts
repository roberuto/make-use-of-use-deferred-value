export type RangeSliderProps = {
  min: string;
  max: string;
  value: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
