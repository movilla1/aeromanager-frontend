import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ApiListCall } from '../../shared/apiCall'
import FlightDataRow from './FlightDataRow'
import LoadingSpinner from '../../shared/LoadingSpinner'

function FlightLogList(props) {
  const [flightData, setFlightData] = useState([]);
  const [totalHours, setTotalHours] = useState(0.0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    ApiListCall("/flight_logs", props.token)
      .then((response) => {
        setFlightData(response?.data?.data);
        setLoading(false);
      }).catch((err) => {
        setLoading(false);
        setFlightData([])
      })
    ApiListCall("/flight_logs/totalize", props.token)
      .then((response)=> {
        setTotalHours(response.data.total);
      })
      .catch( (err) => {
        setLoading(false);
        setTotalHours(0);
      })
  }, [setLoading, setTotalHours, props.token])

  return (
    <Jumbotron className="boxed">
      <h1>Mis Vuelos</h1>
      { !loading && (!flightData || flightData.length < 1) && <h3 style={{ textAlign: "center" }}>No hay registros</h3>}
      { !loading && flightData?.length >= 1 &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Avion</th>
              <th>Inicio</th>
              <th>Fin</th>
              <th>Duraci&oacute;n</th>
              <th>Tipo de Vuelo</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Aciones</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((row) => <FlightDataRow row={row} key={row.id}></FlightDataRow>)}
            <tr>
              <th colSpan={4}>Total</th>
              <td>{totalHours}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      }
      <LoadingSpinner loading={loading}></LoadingSpinner>
    </Jumbotron >
  )
}

FlightLogList.propTypes = {
  token: PropTypes.string
}

export default FlightLogList
