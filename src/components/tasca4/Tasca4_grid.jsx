import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Tasca_props from '../tasca3/Tasca_props';
import lizard from '../../imatges/lizard.png';

export default function Tasca4_grid() {
  // Datos para el Ejercicio 2 (Estado con un array de objetos) 
  const [datosLizards] = useState([
    { id: 1, titol: "Lizard 1", text: "Lizards are a widespread group of squamate reptiles..." },
    { id: 2, titol: "Lizard 2", text: "They range across all continents except Antarctica." },
    { id: 3, titol: "Lizard 3", text: "There are over 6,000 species of lizards." },
    { id: 4, titol: "Lizard 4", text: "This is the fourth lizard in our responsive grid." },
  ]);

  return (
    <Box sx={{ flexGrow: 1, p: 4, marginTop: '50px' }}>
      
      {/*EXERCICI 1: Implementació Manual*/}
      <Typography variant="h4" gutterBottom>Exercici 1</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <Tasca_props imatge={lizard} titol="Lizard" text="Contingut manual 1" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Tasca_props imatge={lizard} titol="Lizard" text="Contingut manual 2" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Tasca_props imatge={lizard} titol="Lizard" text="Contingut manual 3" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Tasca_props imatge={lizard} titol="Lizard" text="Contingut manual 4" b1="SHARE" l1="#" b2="LEARN MORE" l2="#" />
        </Grid>
      </Grid>

      <hr style={{ margin: '40px 0' }} />

      {/*EXERCICI 2: Implementació amb .map()*/}
      <Typography variant="h4" gutterBottom>Exercici 2</Typography>
      <Grid container spacing={2}>
        {datosLizards.map((item) => (
          <Grid item xs={12} md={6} xl={3} key={item.id}>
            <Tasca_props 
              imatge={lizard} 
              titol={item.titol} 
              text={item.text} 
              b1="SHARE" 
              l1="#" 
              b2="LEARN MORE" 
              l2="#" 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}