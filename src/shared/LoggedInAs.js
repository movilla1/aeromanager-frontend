import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link';
import Navbar from 'react-bootstrap/Navbar';
import { isLoggedIn, currentUser } from './session';

export default function LoggedInAs() {
  const user = currentUser();
  console.log(user);
  return (
    <Fragment>
      {isLoggedIn &&
        <Navbar.Text>
          Signed in as: <Link to="/logout">{user?.name}</Link>
        </Navbar.Text>
      }
    </Fragment>
  )
}
