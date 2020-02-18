import React from "react";
import { BackButton } from "../BackButton/BackButton";

import styles from "./Title.module.css";

import { TitleProps } from "./Title.props";

export const Title: React.FC<TitleProps> = ({ title }) => (
  <div className={styles.title}>
    <BackButton />
    <h1>{title}</h1>
  </div>
);
