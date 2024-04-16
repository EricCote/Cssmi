import Bonjour from './Bonjour';
import Compteur from './Compteur';

export default function PageCompteur() {
  return (
    <>
      <Bonjour prenom='Éric' nom='Côté' />
      <Compteur incr={1} />
      <Compteur incr={5} />
      <Compteur incr={10} />
    </>
  );
}
