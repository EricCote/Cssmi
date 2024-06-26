import { Button } from 'react-bootstrap';
import useLocalStorage from './useLocalStorage';

export default function Compteur({ incr }) {
  const [nombre, setNombre] = useLocalStorage(0, `compteur${incr}`);

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
