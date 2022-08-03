import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) { 

   /*оголошуємо keyword як "" (до вводу тексту в форму)*/  
  let [keyword, setKeyword] = useState("");

  /*Функція handleResponse повертає обєкт через API з https://dictionaryapi.dev/*/
   function handleResponse(response){
    console.log(response);
   } 

   /*
    1.функція search виводить значення з поля вводу в формі.
    2. Підключає Api (https://dictionaryapi.dev/).
  
  */
  function search(event) {
    event.preventDefault();

    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

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
    </div>
  );
}
