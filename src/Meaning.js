import React from "react";
import "./Meaning.css";

/* Meanings
    1. definition 
    2. example
Перебираємо циклом definitions. Відбираємо definition
*/
export default function Meaning(props) {
 return (
<div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function (definition, index) {
      return (
        <div key={index}>
          <p>{definition.definition}</p>
          <em>{definition.example}</em>
        </div>
      );
    })}
  </div>
 );
}
