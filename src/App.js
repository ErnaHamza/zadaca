import logo from './logo.svg';
import './App.css';
// Definirano zbog komponente:
import React, { Component } from 'react'

// import Ime from './Components/funkcija';
// import Prezime from './Components/klasa';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Ime/>
        <br/>
        <Prezime/>
        </div>
      </header>
    </div>
  );
}

// Komponenta definirana funkcijom
function Ime() {
  return <h1>Erna</h1>
}

// Komponenta definirana klasom
class Prezime extends Component {
  render() {
    return (
      <h1>Hamzagić</h1>
    )
  }
}

export default App;
