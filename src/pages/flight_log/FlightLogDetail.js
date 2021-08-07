import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Jumbotron, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { ApiListCall } from '../../shared/apiCall';
import { Alert, Table } from 'react-bootstrap';

function FlightLogDetail(props) {
  const history = useHistory();
  const [Message, setMessage] = useState("");
  const [Details, setDetails] = useState({});

  const handleBack = () => {
    history.goBack();
  }

  let { id } = useParams();

  useEffect(() => {
    ApiListCall(`/flight_logs/${id}`, props.token)
      .then((response) => {
        setDetails(response.data?.data.attributes);
      }).catch((err) => {
        setMessage("Imposible obtener datos")
      })
  }, [id, props.token]);

  return (
    <Jumbotron>
      <h1>Mis vuelos</h1>
      <h3>Detalle del vuelo: #{id}</h3>
      {Message && <Alert kind="warning">{Message}</Alert>}
      <Table>
        <tbody>
          <tr>
            <th>Avion:</th>
            <td>{Details.airplane}</td>
          </tr>
          <tr>
            <th>Inicio</th>
            <td>{Details.flightStart}</td>
          </tr>
          <tr>
            <th>Fin</th>
            <td>{Details.flightEnd}</td>
          </tr>
          <tr>
            <th>Duracion normalizada</th>
            <td>{Details.normalizedDuration}</td>
          </tr>
          <tr>
            <th>Tipo de vuelo</th>
            <td>{Details.flightType}</td>
          </tr>
          {Details.instructor &&
            <tr>
              <th>Instructor</th>
              <td>{Details.instructor}</td>
            </tr>
          }
          <tr>
            <th>Odometro Inicial</th>
            <td>{Details.odoStart}</td>
          </tr>
          <tr>
            <th>Odometro Final</th>
            <td>{Details.odoEnd}</td>
          </tr>
          <tr>
            <th>Aeropuerto Origen</th>
            <td>{Details.originAirport}</td>
          </tr>
          <tr>
            <th>Aeropuerto Destino</th>
            <td>{Details.destinationAirport}</td>
          </tr>
        </tbody>
      </Table>
      <Button type="button" onClick={handleBack}><FontAwesomeIcon icon={faBackward} /> Back</Button>
    </Jumbotron>
  )
}

FlightLogDetail.propTypes = {
  token: PropTypes.string
}

export default FlightLogDetail

