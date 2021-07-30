import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import { Alert, Jumbotron, Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons'
import DateTimePicker from 'react-datetime-picker'
import { currentUser } from '../../shared/session'
import { ApiCreateOrUpdateCall, ApiListCall } from '../../shared/apiCall'

function FlightLogForm(props) {
  const [Message, setMessage] = useState("");
  const [Airplanes, setAirplanes] = useState([]);
  const [StartTime, setStartTime] = useState(new Date());
  const [EndTime, setEndTime] = useState(new Date());
  const [Instructors, setInstructors] = useState([])
  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = {
      airplane_id: evt.target.airplane.value,
      flight_start: StartTime,
      flight_end: EndTime,
      flight_type: evt.target.flightType.value
    }
    ApiCreateOrUpdateCall("/flight_logs", formData, props.token)
      .then((response) => {
        if (response.data.error === false) {
          history.push("/flightlogs");
        } else {
          setMessage("Fallo al grabar vuelo:" + response.data.message);
        }
      })
  }
  const handleBack = (evt) => {
    history.goBack();
  }

  useEffect(() => {
    ApiListCall("/airplanes", props.token).then(
      (response) => setAirplanes(response.data.data)
    ).catch((err) => setMessage(err.message));
    ApiListCall("/users/instructors", props.token).then(
      (response) => setInstructors(response.data.data)
    ).catch((err) => setMessage(err.message))
  }, [props.token, setMessage, setAirplanes, setInstructors]);

  return (
    <Jumbotron>
      <h1>Nuevo Vuelo</h1>
      <h3>Piloto: {currentUser().name}</h3>
      {Message && <Alert key="alrmts" variant="warning">{Message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Label>Avion</Form.Label>
          </Col>
          <Col>
            <Form.Control
              as="select"
              id="airplane"
              custom
            >
              {
                Airplanes && Airplanes.length > 0 && Airplanes.map(
                  (airplane) => (
                    <option value={airplane.id} key={airplane.id}>{airplane.attributes.identifier}</option>
                  )
                )
              }
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Inicio</Form.Label>
          </Col>
          <Col>
            <DateTimePicker
              format="dd-MM-y HH:mm"
              maxDetail="minute"
              minDetail="decade"
              value={StartTime}
              onChange={setStartTime}
              id="startTime"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Final</Form.Label>
          </Col>
          <Col>
            <DateTimePicker
              format="dd-MM-y HH:mm"
              maxDetail="minute"
              minDetail="decade"
              value={EndTime}
              onChange={setEndTime}
              id="endTime"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Motivo del vuelo</Form.Label>
          </Col>
          <Col>
            <Form.Control
              as="select"
              id="flightType"
            >
              <option value="TAXI">Taxi</option>
              <option value="LA">Linea Aerea</option>
              <option value="TA">Trabajo Aereo</option>
              <option value="VP">Vuelo Privado</option>
              <option value="ENT">Entrenamiento</option>
              <option value="INST">Instrucci&oacute;n</option>
              <option value="I">Instructor</option>
              <option value="PA">Prueba de Aviones</option>
              <option value="IP">Inspector</option>
              <option value="ADAP">Adaptaci&oacute;n</option>
              <option value="READ">Readapaci&oacute;n</option>
              <option value="RP">Remolque de Planeadores</option>
              <option value="SAN">Sanitario</option>
              <option value="ACR">Acrobacia</option>
              <option value="EXA">Examen</option>
              <option value="FOT">Fotograf&iacute;a</option>
              <option value="FOR">Formaci&oacute;n</option>
              <option value="VO">Vuelo Oficial</option>
              <option value="LP">Lanzamiento de Paracaidistas</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Instructor</Form.Label>
          </Col>
          <Col>
            <Form.Control
              as="select"
              id="flightInstructor"
            >
              {Instructors && Instructors.length && Instructors.map((inst) => (<option value={inst.id}>{inst.name}</option>))}
            </Form.Control>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginTop: "10pt" }}>
          <Col>
            <Button title="Save details" type="submit"><FontAwesomeIcon icon={faSave} size="lg" /> Save</Button>
          </Col>
          <Col>
            <Button onClick={handleBack}><FontAwesomeIcon icon={faBackward} /> Back</Button>
          </Col>
        </Row>
      </Form>
    </Jumbotron>
  )
}

FlightLogForm.propTypes = {
  token: PropTypes.string
}

export default FlightLogForm

