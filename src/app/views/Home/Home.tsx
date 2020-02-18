import React from "react";
import { Link } from "react-router-dom";

import { Settings } from "app/components/Settings/Settings";

import { QUOTES_COUNT } from "config";

import styles from "./Home.module.css";

export const Home = () => (
  <div className={styles.home}>
    <div className={styles.header}>
      <h1>{QUOTES_COUNT} Famous Quotes</h1>
      <h2>Concurent Mode</h2>
    </div>
    <div className={styles.nav}>
      <ul>
        <li>
          <Link to="/simple">Boring...</Link>
        </li>
        <li>
          <Link to="/debounced">Better with useDebounce</Link>
        </li>
        <li>
          <Link to="/deffered">Fancy... useDeferredValue</Link>
        </li>
      </ul>
    </div>
    <Settings />
  </div>
);
