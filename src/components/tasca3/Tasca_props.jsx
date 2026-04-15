import { useState } from "react";

export default function Tasca_props({ imatge, titol, text, b1, l1, b2, l2 }) {
  const [estat, setEstat] = useState(true);

  return (
    /* 1. Eliminamos 'inline-flex' (esto hacía que no quisiera encogerse)
       2. Eliminamos 'marginTop: 80px' (el Grid ya gestiona el espacio)*/
       
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}> 
      
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '10px', 
        width: '100%',        // Se adapta al 100% del Grid item
        maxWidth: '345px',    // Pero no crece más de esto
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)', 
        margin: '5px',        // Margen pequeño para que no se peguen
        fontFamily: 'Arial',
        overflow: "hidden", 
      }}>
        <img src={imatge} style={{ width: '100%', height: '140px', objectFit: 'cover' }}/>
        
        <div style={{ padding: '15px' }}>
          <h2 style={{ 
            margin: '0',
            color: "black",
            fontWeight: 'normal',
            textAlign: "left",
          }}>{titol}</h2>
          
          <p style={{ 
            color: '#666', 
            fontSize: '14px',
            textAlign: "left",
            minHeight: '60px' // Ayuda a que todas las tarjetas midan lo mismo
          }}>{text}</p>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href={l1} style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>{b1}</a>
            <a href={l2} style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>{b2}</a>
          </div>
        </div>
      </div>
    </div>
  );
}