import React from 'react';
import './App.css';



class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      cliques: 0
    }
  } 

  handleClick() {
    console.log(this);
    this.setState((estadoAnterior, _props) => ({
      cliques: estadoAnterior.cliques +1
    }));
  }

  handleClick2() {
    console.log('botao dois');
  }

  handleClick3() {
    console.log('Bolsonaro Presidente');
  }

  mudaCor(numero) {
    return numero % 2 === 0? 'green' : 'white';
  }
  render() {
    return (
      <>
      <button onClick={this.handleClick} 
      style={{backgroundColor: this.mudaCor(this.state.cliques)}}>{this.state.cliques}</button>
      <button onClick={this.handleClick2}>Botão</button>
      <button onClick={this.handleClick3}>Botão</button>
      </>
    )
  }
}

export default App;
