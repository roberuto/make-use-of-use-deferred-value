import React, { useState } from "react";

import { Title } from "app/components/Title/Title";
import { Search } from "app/components/Search/Search";
import { ItemsList } from "app/components/ItemsList/ItemsList";

import { quotes } from "data/quotes";

import styles from "./Simple.module.css";

export const Simple = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const fimteredQuote = quotes.filter(quote =>
    quote.sentence.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <Title title="Simple" />
      <div className={styles.simple}>
        <Search searchValue={searchValue} handleChange={handleChange} />
        <ItemsList quotes={fimteredQuote} />
      </div>
    </div>
  );
};
