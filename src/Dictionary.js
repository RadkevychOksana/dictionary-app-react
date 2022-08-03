import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  /*
   Статуси:
    1. keyword як "" (до вводу тексту в форму)
    2. results як {} (дані, що передаються по API з  https://dictionaryapi.dev)
    */
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  /*Функція handleResponse повертає обєкт через API з https://dictionaryapi.dev/
  і змінює статус results з {} на response.data[0]
  */

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  /*
    1.функція search виводить значення з поля вводу в формі.
    2. Підключає Api (https://dictionaryapi.dev/).
  
  */
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  /*функція handleKeywordChange змінює статус keyword "" на  event.target.valueз*/
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  /*
  Події
    1.При відправці форми подія  onSubmit запускає функцію search.  
    2.При введенні тексту в поле вводу форми подія  onChange, що запускає функцію handleKeywordChange.

    Компоненти:
      <Results results="results"/>
      <Results results="results"/>
    1. Results обробляються данні з https://dictionaryapi.dev/, що передаються через API. Властивість results = актуальний статус results
  */

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
      </form>
      <Results results={results}/>
    </div>
  );
}
