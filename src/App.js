import React from 'react';
import './App.css';

import Book from './components/book';

function App() {
  const missatge = "Viatge a la lluna"
  return (
    <div className="App">
        <Book 
          varisMissatges={missatge}
        />
    </div>
  );
}

export default App;
