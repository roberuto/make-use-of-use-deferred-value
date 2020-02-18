import React, { useState, useMemo, useDeferredValue } from "react";

import { Title } from "app/components/Title/Title";
import { Search } from "app/components/Search/Search";
import { ItemsList } from "app/components/ItemsList/ItemsList";

import { quotes } from "data/quotes";

import styles from "./Deferred.module.css";

export const Deferred = () => {
  const [searchValue, setSearchValue] = useState("");
  const filterText = useDeferredValue(searchValue, { timeoutMs: 5000 });

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
      <Title title="Deferred" />
      <div className={styles.deffered}>
        <Search searchValue={searchValue} handleChange={handleChange} />
        <ItemsList quotes={fimteredQuote} />
      </div>
    </div>
  );
};
