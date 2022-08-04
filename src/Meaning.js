import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

/* Meanings
    1. definition 
    2. example
    3. synonyms
Перебираємо циклом definitions. Відбираємо definition

Компоненти 
  1.Synonyms з властивістю props.meaning.synonyms
*/
export default function Meaning(props) {
  console.log(props);
 return (
<div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function (definition, index) {
      return (
        <div key={index}>
          <p>
          <strong>Definition:</strong>
          {definition.definition} <br/>
          <Example example={definition.example}/>
          
          <br/>
          <Synonyms synonyms={props.meaning.synonyms}/>
          </p>
        </div>
      );
    })}
  </div>
 );
}
