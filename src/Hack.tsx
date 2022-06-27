import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";
import { useEffect, useRef, useState } from "react";

export function Hack() {
  const [objects,setObjects] = useState([]);
  useEffect(() => {
  
    console.log('sesh-storage',sessionStorage);
    if(sessionStorage.getItem('guessNum')){
      let cguess = sessionStorage.getItem('guesses-'+String(sessionStorage.getItem('guessNum')));
      let cg = JSON.parse(String(cguess));
      setObjects(cg);
    }
  }, [])

  return (
    <div className="App-hack">
      <p style={{"lineBreak":"auto"}}>
        Suggestions:
        <br />
        {objects.map(function(object, i){
            return <span key={i}>{object}, </span>;
        })}
      </p>
    </div>
  );
}
