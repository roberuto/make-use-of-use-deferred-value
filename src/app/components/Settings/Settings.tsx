import React from "react";

import { RangeSlider } from "../RangeSlider/RangeSlider";
import { setRenderLag } from "context/renderLagActionCreators";

import { useRenderLagDispatch } from "hooks/useRenderLagDispatch";
import { useRenderLagState } from "hooks/useRenderLagState";

import styles from "./Settings.module.css";

export const Settings = () => {
  const { renderLag } = useRenderLagState();
  const dispatch = useRenderLagDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(setRenderLag(Number(value)));
  };

  return (
    <div className={styles.settings}>
      <RangeSlider
        min="1"
        max="4"
        value={renderLag!}
        handleChange={handleChange}
      />
    </div>
  );
};
