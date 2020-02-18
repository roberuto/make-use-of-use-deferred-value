import React from "react";
import { Link } from "react-router-dom";

import styles from "./BackButton.module.css";

export const BackButton: React.FC = () => (
  <Link className={styles.backButton} to="/">
    Back
  </Link>
);
