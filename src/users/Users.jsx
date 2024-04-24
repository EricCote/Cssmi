/* eslint-disable react/no-unescaped-entities */
import { Suspense, use } from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import axios from 'axios';
import UserContext from '../usersProviders';

export default function Users() {
  const { setUsers } = use(UserContext);
  return (
    <>
      <h1>Liste d'utilisateurs</h1>
      <Button
        onClick={() => {
          setUsers([]);
        }}
      >
        Force Refresh
      </Button>
      <Suspense fallback={<Spinner variant='danger' />}>
        <DisplayUsers />
      </Suspense>
    </>
  );
}

let compteur = 0;

function DisplayUsers() {
  let ctx = use(UserContext);
  let users = [];

  if (ctx.users.length > 0) {
    users = ctx.users;
  } else {
    let data = use(fetchUsers());
    ctx.setUsers(data.results);
  }

  return (
    <Table striped hover>
      <tbody>
        {users.map((u) => (
          <tr key={u.email}>
            <td>
              {u.name.first} {u.name.last}
            </td>
            <td>{u.email}</td>

            <td>{u.phone}</td>
            <td>
              <img
                src={u.picture.thumbnail}
                alt={`${u.name.first} ${u.name.last}`}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

async function fetchUsers() {
  const response = await axios.get(
    'https://randomuser.me/api/?results=10&seed=' + compteur++
  );
  return response.data;
}
