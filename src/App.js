import React, {Component} from 'react';

export default class Atividade extends Component{
  Mensagem = () => {
    return(
        <h1>If I only could, I'd make a deal with god</h1>
    )
  }

  Dobro = (x, y) =>{
    return(
      <p>{x*y}</p>
    )
  }

  render(){
    return(
      <div>
        {this.Mensagem()}
        {this.Dobro(10, 2)}
      </div>
    )
  }
};