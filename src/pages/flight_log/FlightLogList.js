import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { ApiListCall } from '../../shared/apiCall'
import FlightDataRow from './FlightDataRow'
import LoadingSpinner from '../../shared/LoadingSpinner'

function FlightLogList(props) {
  const [flightData, setFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    ApiListCall("/flight_logs", props.token)
      .then((response) => {
        setFlightData(response?.data?.data);
        setLoading(false);
      }).catch((err) => {
        setLoading(false);
        setFlightData([{ id: 0, airplane: "No Data", start: 0, end: 0, duration: 0 }])
      })
  }, [setLoading, props.token])

  return (
    < Jumbotron >
      <h1>Mis Vuelos</h1>
      { !loading && (!flightData || flightData.length === 0) && <h3 style={{ textAlign: "center" }}>No hay registros</h3>}
      { !loading && flightData?.length > 0 &&
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Plane</th>
              <th>Start</th>
              <th>End</th>
              <th>Normalized Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((row) => <FlightDataRow row={row}></FlightDataRow>)}
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
