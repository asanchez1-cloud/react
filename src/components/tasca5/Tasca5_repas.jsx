import React, { useState } from 'react';

// COMPONENT TaskItem
// Rebrà taskName, completed i una funció canviarEstat com a props [cite: 8]
function TaskItem({ taskName, completed, alCanviar }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '10px', 
      padding: '8px',
      borderBottom: '1px solid #FFF',
      cursor: 'pointer'
    }} onClick={alCanviar} /* Fem que tota la línia sigui clicable */> 
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={alCanviar} /* Gestiona el clic al checkbox */
      />
      <span style={{ 
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#FFF' : '#FFF' 
      }}>
        {taskName}
      </span>
    </div>
  );
}

// COMPONENT PRINCIPAL
export default function Tasca5Repas() {
  // L'estat inicial segons l'enunciat [cite: 13, 15, 16, 17]
  const [tasques, setTasques] = useState([
    { taskName: 'Fer la compra', completed: false },
    { taskName: 'Netejar la casa', completed: true },
    { taskName: 'Acabar el projecte', completed: false }
  ]);

  // Funció per alternar l'estat de completat d'una tasca específica
  const commutaTasca = (index) => {
    const novesTasques = [...tasques]; // Fem una còpia de l'estat
    novesTasques[index].completed = !novesTasques[index].completed; // Invertim el valor
    setTasques(novesTasques); // Actualitzem l'estat [cite: 9]
  };

  return (
    <div style={{ marginTop: '60px', padding: '20px', maxWidth: '400px' }}>
      <h2 style={{ borderBottom: '2px solid #FFF' }}>Llista de Tasques</h2>
      {tasques.map((tasca, index) => (
        <TaskItem 
          key={index} 
          taskName={tasca.taskName} 
          completed={tasca.completed} 
          alCanviar={() => commutaTasca(index)} // Passem la funció al fill
        />
      ))}
    </div>
  );
}