import { useRef, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const auteursDefault = [
  { id: 1, nom: 'Charles' },
  { id: 2, nom: 'Seb' },
  { id: 3, nom: 'Alex' },
  { id: 4, nom: 'Ricky' },
  { id: 5, nom: 'Nicolas' },
  { id: 6, nom: 'Jonathan' },
];

export default function About() {
  const prochainId = useRef(7);
  const [auteurs, setAuteurs] = useState(auteursDefault);
  const [nom, setNom] = useState('');

  function deleteAuteur(id) {
    setAuteurs(auteurs.filter((a) => a.id !== id));
  }

  return (
    <>
      <h1>À Propos</h1>
      <p>Liste des auteurs :</p>
      <Table striped hover>
        <tbody>
          {auteurs.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nom}</td>
              <td>
                <Button
                  onClick={() => {
                    deleteAuteur(a.id);
                  }}
                >
                  ❌
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Form
        id='data'
        onSubmit={(evt) => {
          evt.preventDefault();
          setAuteurs([...auteurs, { id: prochainId.current++, nom: nom }]);
          setNom('');
        }}
      >
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            name='nom'
            placeholder='Entrez votre nom'
            value={nom}
            onChange={(evt) => {
              setNom(evt.target.value);
            }}
          />
        </Form.Group>
        <Button type='submit'>Ajouter auteur</Button>
      </Form>
    </>
  );
}
