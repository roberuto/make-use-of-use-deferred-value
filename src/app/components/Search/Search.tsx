import React from "react";

import styles from "./Search.module.css";

import { SearchProps } from "./Search.types";

export const Search: React.FC<SearchProps> = ({
  searchValue,
  handleChange
}) => (
  <input
    className={styles.search}
    type="text"
    placeholder="Search quote"
    value={searchValue}
    onChange={handleChange}
  />
);
