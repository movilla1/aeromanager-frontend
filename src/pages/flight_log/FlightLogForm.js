import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Alert, Form, Jumbotron, Col, Row } from 'react-bootstrap'
import { ApiCreateOrUpdateCall, ApiListCall } from '../../shared/apiCall'
import { DateTime } from 'react-datetime'

function FlightLogForm(props) {
  const initialState = { airplane: 0, flightStart: 0, flightEnd: 0 };
  const [formData, setformData] = useState(initialState);
  const [Message, setMessage] = useState("");
  const [Airplanes, setAirplanes] = useState([]);
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    ApiCreateOrUpdateCall("/flightlogs", formData, props.token)
      .then((data) => {
        if (data.error == false) {
          history.push("/flightlogs");
        } else {
          setMessage("Fallo al grabar vuelo:" + data.message);
        }
      })
  }
  useEffect(() => {
    ApiListCall("/airplanes", props.token).then(
      (response) => setAirplanes(response.data)
    ).catch((err) => setMessage(err.message));
  })

  return (
    <Jumbotron>
      {Message && <Alert key="alrmts" variant="warning">{Message}</Alert>}
      <form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label>Avi&oacute;n</Form.Label>
          </Col>
          <Col>
            <Form.Select>
              {
                Airplanes && Airplanes.length > 0 && Airplanes.map(
                  (airplane) => (
                    <option value={airplane.id}>{airplane.identifier}</option>
                  )
                )
              }
            </Form.Select>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Inicio</Form.Label>
          </Col>
          <Col>
            <DateTime />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Final</Form.Label>
          </Col>
          <Col>
            <DateTime />
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <col>
          </col>
        </Row>
      </form>
    </Jumbotron>
  )
}

FlightLogForm.propTypes = {
  token: PropTypes.string
}

export default FlightLogForm

