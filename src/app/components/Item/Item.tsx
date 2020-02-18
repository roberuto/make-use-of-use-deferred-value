import React from "react";

import { useRenderLagState } from "hooks/useRenderLagState";
import { fakeSlowDown } from "data/fakeSlowDown";

import styles from "./Item.module.css";

import { ItemProps } from "./Items.types";

export const Item: React.FC<ItemProps> = ({ sentence, author }) => {
  const { renderLag } = useRenderLagState();

  fakeSlowDown(renderLag!);

  return (
    <div className={styles.item}>
      <h1>"{sentence}"</h1>
      <p>{author}</p>
    </div>
  );
};
