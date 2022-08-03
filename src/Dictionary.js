import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(props) { 
    /*Оголошуємо станд для тексту з форми ввода keyword, та зміну статусу після того як текст введться setKeyword, початковий статус пустий рядок,Відміняються дефолтні події в бразері*/  
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`My word is ${keyword}`);
  }
  function handleKeywordChange(event) {
    
      /*знаходимо властивості в обєкті event, що передане з поля вводу, в яких лежить це значення, і змінюємо статус на setKeyword*/
    
   setKeyword(event.target.value);
  }
  return (
    /*При відправці форми запускається функція search*/
     /*Текст з поля вводу відправляємо на функцію handleKeywordChange*/
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
