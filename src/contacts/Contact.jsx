import { Suspense, use } from 'react';
import ContactApi from './contactApi';
import { Form, FormGroup, Spinner, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function Contact() {
  let { id } = useParams();

  return (
    <>
      <h1>Contact</h1>
      <Suspense fallback={<Spinner />}>
        <Details id={id} />
      </Suspense>
    </>
  );
}

function Details({ id }) {
  const contact = use(ContactApi.getContact(id));

  return (
    <Form>
      <Form.Group>
        <Form.Label>Id</Form.Label>
        <Form.Control value={contact.id} readOnly />
      </Form.Group>
      <Form.Group>
        <Form.Label>Prenom</Form.Label>
        <Form.Control defaultValue={contact.firstName} name='firstName' />
      </Form.Group>
      <Form.Group>
        <Form.Label>Nom</Form.Label>
        <Form.Control defaultValue={contact.lastName} name='lastName' />
      </Form.Group>
    </Form>
  );
}
