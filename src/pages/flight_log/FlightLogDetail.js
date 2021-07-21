import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/esm/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';

function FlightLogDetail(props) {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  }

  let { id } = useParams();
  return (
    <Jumbotron>
      <h1>Mis vuelos</h1>
      <h3>Detalle del vuelo: #{id}</h3>
      <button type="button" onClick={handleBack}><FontAwesomeIcon icon={faBackward} /> Back</button>
    </Jumbotron>
  )
}

FlightLogDetail.propTypes = {
  token: PropTypes.string
}

export default FlightLogDetail

