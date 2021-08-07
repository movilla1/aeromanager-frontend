import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginEntry from './LoginEntry';
import { currentUser } from '../shared/session';

export default function NavLoginSlot() {
  const userName = currentUser()?.name;
  if (userName) {
    return (
      <NavDropdown title={userName} id="basic-nav-dropdown">
        <NavDropdown.Item href="/profile">Mi cuenta</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
      </NavDropdown>
    )
  } else {
    return (<LoginEntry />);
  }
}
