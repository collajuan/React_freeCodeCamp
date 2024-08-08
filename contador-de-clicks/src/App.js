import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/Logo.bmp'

function App() {

  const manejarClick = () => {
    console.log('clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
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
          
            <Contador numClicks='5' />

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
