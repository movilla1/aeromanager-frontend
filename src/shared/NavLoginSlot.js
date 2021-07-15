import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginEntry from './LoginEntry';
import useToken from './useToken';
import { currentUser } from '../shared/session';

export default function NavLoginSlot() {
  const { token, setToken } = useToken();
  const userName = currentUser()?.name;
  if (token) {
    return (
      <NavDropdown title={userName} id="basic-nav-dropdown">
        <NavDropdown.Item href="/profile">Mi cuenta</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
      </NavDropdown>
    )
  } else {
    return (<LoginEntry />);
  }
}
