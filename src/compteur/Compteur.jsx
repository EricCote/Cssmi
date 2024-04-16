import { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function Compteur({ incr }) {
  const [nombre, setNombre] = useState(0);

  function click() {
    //la fonction setState cédule une modification de l'état et un re-render
    //après la série d'événement
    //optimisation pour éviter le clignotement (flicker)
    //On peut enchainer les setState si on utilise une fonction de set (rarement utilisé)
    setNombre(nombre + incr);
  }

  return (
    <Button
      className='me-3'
      variant={nombre > 9 ? 'success' : 'primary'}
      onClick={click}
    >
      Nombre : {nombre}
    </Button>
  );
}
