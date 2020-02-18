import React from "react";

import styles from "./RangeSlider.module.css";

import { RangeSliderProps } from "./RangeSlider.types";

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  value,
  handleChange
}) => {
  return (
    <div className={styles.rangeSlider}>
      <label>Render Lag</label>
      <input
        className="slider"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
