import React, { Fragment } from 'react'
import LoggedInAs from './LoggedInAs'
import LoginEntry from './LoginEntry'
import { getToken } from './session'

export default function NavLoginSlot() {
  const token = getToken();

  return (
    <Fragment>
      { token ? <LoggedInAs /> : <LoginEntry />}
    </Fragment>
  )
}
