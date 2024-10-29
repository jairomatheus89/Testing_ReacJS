import './App.css';
import './button.css';
import { useState } from "react";
import DivPattern from './divPattern.js';
import orochimaru from './img/orochimaru.png';
import painzin from './img/painn.png';
import Ticker from './tickerIdea/ticker.js';


function App() {
  return (
    <div className="App">
      <Ticker text="- dipiroca - bucetacil - navagina - peniscilina - nocudecin - nabucetin - ladentrin - analdor - fudelamina - parabucetamol "/>
      <header
        id="headerDiv"
      >
        <img className="imgzinhas" src={orochimaru} alt="sei la que porra"/>
        <h1>
          Toma no teu rabo Cowboy
        </h1>
        <img className="imgzinhas" src={painzin} alt="sei la que porra"/>

      </header> 
      <middle>    
        <Button/>
        <DivPattern/>
      </middle>

    </div>
  );
}

function Button(){

  const clicandinho = () => {
    window.alert("Carma rapai, não tem nada ainda, to só começando fiote!...");
  }

  const [text, setText] = useState("Clicke Foool!");
  const mouseEntrando = () => {
    setText("SatanTeAma");
  };
  const mouseSaindo = () => {
    setText("Click Fool!");
  };
  return(
    <button
      className="satanButton"
      onMouseEnter={mouseEntrando}
      onMouseLeave={mouseSaindo}
      onClick={clicandinho}
    >
      <span className='text'>{text}</span>
    </button>
  );
}

export default App;
