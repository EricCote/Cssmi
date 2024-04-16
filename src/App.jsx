import { Container } from 'react-bootstrap';
import PageCompteur from './compteur/PageCompteur';
import Home from './home/Home';
import About from './about/About';
import Users from './users/Users';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Menu';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import UserContext from './usersProviders';
import Contacts from './contacts/Contacts';
import Contact from './contacts/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <h1>Erreur 404</h1>,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'compteur', element: <PageCompteur /> },
      { path: 'users', element: <Users /> },
      { path: 'contacts', element: <Contacts />, index: true },
      { path: 'contacts/:id', element: <Contact /> },
    ],
  },
]);

function Root() {
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
