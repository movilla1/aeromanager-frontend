import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import { Alert, Jumbotron, Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faBackward } from '@fortawesome/free-solid-svg-icons'
import DateTimePicker from 'react-datetime-picker'
import { FlightLog } from '../../models/FlightLog'
import { currentUser } from '../../shared/session'
import { ApiCreateOrUpdateCall } from '../../shared/apiCall'
import MappedSelect from '../../shared/formElements/MappedSelect'
import TextField from '../../shared/formElements/TextField'

function FlightLogForm(props) {
  const [Message, setMessage] = useState("");
  const [StartTime, setStartTime] = useState(new Date());
  const [EndTime, setEndTime] = useState(new Date());
  const initialFlightLog = new FlightLog(props.flightLogData)
  const [FlightLogData, setFlightLogData] = useState(initialFlightLog);
  const history = useHistory();
  const {
    airplaneID,
    flightType,
    odoStart,
    odoEnd,
    instructor,
    destinationAirport,
    originAirport
  } = FlightLogData;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(FlightLogData);
    const formData = {
      airplane_id: airplaneID,
      flight_start: StartTime,
      flight_end: EndTime,
      flight_type: flightType,
      odo_start: odoStart,
      odo_end: odoEnd,
      instructor_id: instructor,
      destination_airport: destinationAirport,
      origin_airport: originAirport
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

  const handleChangeData = (evt, field) => {
    setFlightLogData({
      ...FlightLogData,
      [field]: evt.target.value
    });
  }

  return (
    <Jumbotron className="boxed">
      <h1>Nuevo Vuelo</h1>
      <h3>Piloto: {currentUser().name}</h3>
      {Message && <Alert key="alrmts" variant="warning">{Message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="2">
            <Form.Label>Avion</Form.Label>
          </Col>
          <Col md="10">
            <MappedSelect
              token={props.token}
              onChange={(e) => handleChangeData(e, "airplaneID")}
              value={airplaneID}
              apiEndpoint="/airplanes"
            ></MappedSelect>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <Form.Label>Motivo del vuelo</Form.Label>
          </Col>
          <Col md="4">
            <Form.Control
              as="select"
              id="flightType"
              onChange={(e) => handleChangeData(e, "flightType")}
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
          <Col md="2">
            <Form.Label>Instructor</Form.Label>
          </Col>
          <Col md="4">
            <MappedSelect
              id="instructor"
              token={props.token}
              value={instructor}
              onChange={(e) => handleChangeData(e, "instructor")}
              apiEndpoint="/users/instructors"
              disabled={flightType !== "INST"}
            ></MappedSelect>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <Form.Label>Inicio</Form.Label>
          </Col>
          <Col md="4">
            <DateTimePicker
              format="dd-MM-y HH:mm"
              maxDetail="minute"
              minDetail="decade"
              value={StartTime}
              onChange={setStartTime}
              id="startTime"
            />
          </Col>
          <Col md="2">
            <Form.Label>Final</Form.Label>
          </Col>
          <Col md="4">
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
          <TextField
            label="Odometro Inicial"
            placeholder="0"
            type="number"
            value={odoStart}
            onChange={(e) => handleChangeData(e, "odoStart")}
          ></TextField>
          <TextField
            label="Odometro Final"
            placeholder="0"
            type="number"
            value={odoEnd}
            onChange={(e) => handleChangeData(e, "odoEnd")}
          ></TextField>
        </Row>
        <Row>
          <TextField
            label="Aero. Origen"
            placeholder="CED"
            value={originAirport}
            onChange={(e) => handleChangeData(e, "originAirport")}
          ></TextField>
          <TextField
            label="Aero. Destino"
            placeholder="EZE"
            value={destinationAirport}
            onChange={(e) => handleChangeData(e, "destinationAirport")}
          ></TextField>
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
  token: PropTypes.string.isRequired,
  flightLogData: PropTypes.object
}

FlightLogForm.defaultProps = {
  flightLogData: {}
};

export default FlightLogForm

