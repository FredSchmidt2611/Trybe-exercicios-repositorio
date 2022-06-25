import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!');
}

function handleClick2() {
  console.log('botao dois');
}

function handleClick3() {
  console.log('Bolsonaro Presidente');
}

class App extends React.Component {
  render() {
    return (
      <>
      <button onClick={handleClick}>Botão</button>
      <button onClick={handleClick2}>Botão</button>
      <button onClick={handleClick3}>Botão</button>
      </>
    )
  }
}

export default App;
