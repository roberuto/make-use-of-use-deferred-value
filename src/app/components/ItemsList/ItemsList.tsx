import React from "react";

import { Item } from "../Item/Item";

import styles from "./ItemsList.module.css";

import { ItemsListProps } from "./ItemsList.types";

export const ItemsList: React.FC<ItemsListProps> = React.memo(({ quotes }) => {
  return (
    <div className={styles.itemsList}>
      {quotes.map((quote, idx) => (
        <Item key={idx} sentence={quote.sentence} author={quote.author} />
      ))}
    </div>
  );
});
