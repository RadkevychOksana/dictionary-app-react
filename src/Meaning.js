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
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        console.log(definition.synonyms);
        return (
          <div key={index}>
            <div className="Definition">{definition.definition}</div>
            <div className="Example">
            <Example example={definition.example} />
            </div> 
          </div>
        );
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
