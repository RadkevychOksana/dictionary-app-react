import React from "react";
/* Умова виведення - якщо props.synonyms === true (є даніњ), виводимо блок з синонімами, або нічого (null) */
export default function Synonyms(props) {
  return (
    <>
     <strong>Synonym:</strong>
      {props.synonyms.map(function (synonym, index) {
        console.log(synonym);
        return (
            <ul>
              <li key={index}>{synonym}</li>
            </ul>   
        ); 
      })}
    </>
  );
}
