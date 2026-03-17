import './App.css';
import { useState } from 'react';
import Carrusel from './components/tasca2/Carrusel';
import Galeria from './components/tasca2/Galeria';
import Exercici1 from './components/tasca1/Exercici1';
import Exercici2 from './components/tasca1/Exercici2';
import Exercici3 from './components/tasca1/Exercici3';
import Exercici4 from './components/tasca1/Exercici4';


import Menu from './Menu';
function App() {
  const [tascaSeleccionada, setTascaSeleccionada] = useState("tasca 1")

  function getTascaComponent() {
    switch (tascaSeleccionada) {
      case "tasca 1":
        return <Exercici1 />
      case "tasca 2":
        return <Exercici2 />
      case "tasca 3":
        return <Exercici3 />
      case "tasca 4":
        return <Exercici4 />
      case "tasca 2.1":
        return <Galeria />
      case "tasca 2.2":
        return <Carrusel />
      default:
      return null
    }
  }
  return (
    <div>
      <Menu canviarTasca={setTascaSeleccionada} />
      {getTascaComponent()}
    </div>
  )
}

export default App;