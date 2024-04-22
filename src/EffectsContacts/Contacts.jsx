import { Suspense, useEffect, useRef, useState } from 'react';
import ContactApi from './contactApi';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Contacts() {
  return (
    <>
      <h1>Liste de contacts</h1>
      <Suspense fallback={<Spinner />}>
        <ContactList />
      </Suspense>
    </>
  );
}

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const flagLoad = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    chargerContacts();

    async function chargerContacts() {
      if (!flagLoad.current) {
        flagLoad.current = true;
        const ctcs = await ContactApi.getAllContacts();
        setContacts(ctcs);
        console.log('setContact est appelé et génère un rendu');
      }
    }
  }, []);

  //Tableau de dépendances (dependency array) fonctionne comme ceci
  //null: exécute après chaque rendu
  //[]: exécute après le premier rendu (mount)
  //[x1,x2,x3]: exécute après le premier rendu et après tout rendu où x1 ou x2 ou x3 sont modifiés

  return (
    <Table hover striped>
      <tbody>
        {contacts.map((c) => (
          <tr key={c.id}>
            <td>{c.firstName} </td>
            <td>{c.lastName} </td>
            <td>{c.email} </td>
            <td>
              <Button onClick={() => navigate('/contacts/' + c.id)}>🖊️</Button>{' '}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
