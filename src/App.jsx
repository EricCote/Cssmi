import { Container } from 'react-bootstrap';
import PageCompteur from './compteur/PageCompteur';
import Home from './home/Home';
import About from './about/About';
import Users from './users/Users';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Menu';
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useMatches,
} from 'react-router-dom';
import { StrictMode, useEffect, useState } from 'react';
import UserContext from './usersProviders';
import Contacts from './EffectsContacts/Contacts';
import Contact from './contacts/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Erreur 404</h1>,
    children: [
      { index: true, element: <Home />, handle: { title: 'Accueil' } },
      { path: 'about', element: <About />, handle: { title: 'À Propos' } },
      {
        path: 'compteur',
        element: <PageCompteur />,
        handle: { title: 'Compteur' },
      },
      { path: 'users', element: <Users />, handle: { title: 'Utilisateurs' } },
      {
        path: 'contacts',
        element: <Contacts />,
        index: true,
        handle: { title: 'Contacts' },
      },
      {
        path: 'contacts/:id',
        element: <Contact />,
        handle: { title: 'Contact' },
      },
    ],
  },
]);

function Root() {
  let matches = useMatches();
  useEffect(() => {
    const t = matches[matches.length - 1].handle?.title;
    if (t) document.title = t;
  });

  return (
    <>
      <Menu />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default function App() {
  const [users, setUsers] = useState([]);

  return (
    <StrictMode>
      <UserContext.Provider value={{ users, setUsers }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </StrictMode>
  );
}
