import React, { Fragment } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { isLoggedIn, currentUser } from './session';

export default function LoggedInAs() {
  return (
    <Fragment>
      {isLoggedIn &&
        <Navbar.Text>
          Signed in as: <a href="#login">{currentUser().username}</a>
        </Navbar.Text>
      }
    </Fragment>
  )
}
