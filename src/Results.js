import React from "react";
import Meaning from "./Meaning";
import "./Results";

/*Умова виведення запуску коду props.results === true 

Властивості обєкту
    1. Word
Перебираємо циклом массив з обєктів props.results.meanings. Відбираємо meaning.definitions[0].definition

Компоненти в циклі props.results.meanings по індексу
1. Meaning з властивістю meaning

*/
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}> <Meaning meaning={meaning}/></div> 
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
