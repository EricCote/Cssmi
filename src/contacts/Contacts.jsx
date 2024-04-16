import { Suspense, use } from 'react';
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
  const contacts = use(ContactApi.getAllContacts());
  const navigate = useNavigate();

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
