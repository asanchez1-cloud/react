import { useState } from 'react'
import './App.css'

function Comptador() {

    const [comptador, setComptador] = useState(0)
    
    function incrementar() {
        setComptador(comptador + 1)
    }
    function decrementar() {
        setComptador(comptador - 1)
    }
    function reiniciar() {
        setComptador(0)
    }

  return (
    <div className="contenidor">
        <div className="targeta">
            <h1>Comptador</h1>

            <div id="comptador" className="comptador">{comptador}</div>
            
            <div className="botons">
                <button button onClick={decrementar}>Decrementar</button>
                <button button onClick={reiniciar}>Reiniciar</button>
                <button button onClick={incrementar}>Incrementar</button>
            </div>
        </div>
    </div>
  )
}

export default Comptador