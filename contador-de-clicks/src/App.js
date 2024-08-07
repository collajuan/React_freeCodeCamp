import './App.css';
import Boton from './componentes/Boton';
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
            <Boton 
              text='Cick'
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
