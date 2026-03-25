import { useState } from "react";

export default function Tasca_props({ imatge, titol, text, b1, l1, b2, l2 }) {
  const [estat, setEstat] = useState(true);

  return (
    <div style={{ display: 'inline-flex', 
    marginTop: '80px',
    borderRadius: '10px',
 }}> 
      
      <div style={{ 
        backgroundColor: 'white', 
        borderRadius: '10px', 
        width: '345px', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)', 
        margin: '10px', 
        fontFamily: 'Arial',
        overflow: "hidden", 
 
      }}>
        <img src={imatge} style={{ width: '100%', 
          height: '140px',
           }}/>
        
        <div style={{ padding: '15px' }}>
          
          <h2 style={{ margin: '0',
            color: "black",
            fontWeight: 'none',
            textAlign: "left",
           }}>{titol}</h2>
          
          <p style={{ color: '#666', 
            fontSize: '14px',
            textAlign: "left",

            }}>{text}</p>
          
          <div style={{ display: 'flex', 
            gap: '15px' }}>
            <a href={l1} style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>{b1}</a>
            <a href={l2} style={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}>{b2}</a>
          </div>
        </div>
      </div>
    </div>
  );
}