import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/Logo.bmp'
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numClicks: 0
    }
    this.manejarClick = this.manejarClick.bind(this)
    this.reiniciarContador = this.reiniciarContador.bind(this)
  } 

  manejarClick() {
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1}))
  }

  reiniciarContador() {
    this.setState({ numClicks : 0})
  }

  render() {
    return (
      <div className='App'>
          <div className='freecodecamp-logo-contenedor'>
            <img 
              className='freecodecamp-log'
              src={freeCodeCampLogo}
              alt='Logo' />
          </div>
          <div className='contenedor-principal'>
            
              <Contador numClicks={this.state.numClicks} />
  
              <Boton 
                text='Click'
                esBotonDeClick={true}
                manejarClick={this.manejarClick} />
              
              <Boton 
                text='Reiniciar'
                esBotonDeClick={false}
                manejarClick={this.reiniciarContador}  />            
          </div>
      </div>
    );
  }
}


export default App;
