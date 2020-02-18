import React, { useState, useMemo } from "react";

import { useDebounce } from "hooks/useDebounce";
import { quotes } from "data/quotes";

import { Title } from "app/components/Title/Title";
import { Search } from "app/components/Search/Search";
import { ItemsList } from "app/components/ItemsList/ItemsList";

import styles from "./Debounced.module.css";

export const Debounced = () => {
  const [searchValue, setSearchValue] = useState("");
  const filterText = useDebounce(searchValue, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const fimteredQuote = useMemo(
    () =>
      quotes.filter(quote =>
        quote.sentence.toLowerCase().includes(filterText.toLowerCase())
      ),
    [filterText]
  );

  return (
    <div>
      <Title title="Debounced" />
      <div className={styles.debounced}>
        <Search searchValue={searchValue} handleChange={handleChange} />
        <ItemsList quotes={fimteredQuote} />
      </div>
    </div>
  );
};
