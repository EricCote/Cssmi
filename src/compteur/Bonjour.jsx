// Composant: c'est une structure qui stocke un certain état, et qui génère un rendu
// pour créer un composant, il faut créer une fonction avec un nom qui commence par une majuscule
// qui prend en paramètre des props et qui retourne du JSX
export default function Bonjour({ prenom }) {
  return <h1>Salut {prenom || 'tous'}!!!</h1>;
}
