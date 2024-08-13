import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/Logo.bmp'
import { useState } from 'react';

function App() {

  // USO de HooKs useState
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 10)
    // console.log('clic');
  }

  const reiniciarContador = () => {
    setNumClicks(0)
    // console.log('Reiniciar');
  }


  return (
    <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-log'
            src={freeCodeCampLogo}
            alt='Logo' />
        </div>
        <div className='contenedor-principal'>
          
            <Contador numClicks={numClicks} />

            <Boton 
              text='Click'
              esBotonDeClick={true}
              manejarClick={manejarClick} />
            
            <Boton 
              text='Reiniciar'
              esBotonDeClick={false}
              manejarClick={reiniciarContador}  />            
        </div>
    </div>
  );
}

export default App;
