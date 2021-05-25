import React from 'react';
import './App.css';

import Book from './components/book';
//import {LLibres} from './LLibres.json';
import {MostrarLLibres} from "./components/StockLLibres";

function App() {
  const missatge = "Viatge a la lluna"
  return (
    <div className="App">
        <Book 
          varisMissatges={missatge}
        />

        <MostrarLLibres/>
    </div>
  );
}

export default App;
