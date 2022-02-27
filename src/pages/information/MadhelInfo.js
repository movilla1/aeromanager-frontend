import React, { Fragment, useState } from 'react'
import { Card, Container, Form, Row, Col, FormLabel } from 'react-bootstrap'
import { getMadhelAirport } from '../../shared/madhel'

function MadhelInfo(props) {
  const [MadhelInfo, setMadhelInfo] = useState({});
  const handleChange = (e) => {
    getMadhelAirport(e.target.value, "ignore", setMadhelInfo);
  }
  return (
    <Fragment>
      <Card>
        <Card.Header className='madhel-header'>Informaci&oacute;n MADHEL</Card.Header>
        <Card.Body>
          <Container fluid className={"madhel-info"}>
            <Row>
              <Col>
                <FormLabel>Identificador</FormLabel>
              </Col>
              <Col>
                <Form.Control
                  type={"string"}
                  name={"identifier"}
                  id={"identifier"}
                  onChange={(e) => handleChange(e)}
                  placeholder="Ej.: CED"
                />
              </Col>
            </Row>
            { Object.keys(MadhelInfo).length > 1 &&
              <Container className="madhel-info-details">
                <Row>
                  <Col md="2">Identificador</Col>
                  <Col>{MadhelInfo.data.human_readable_identifier}</Col>
                </Row>
                <Row>
                  <Col md="2">Ubicaci&oacute;n</Col>
                  <Col>{MadhelInfo.data.human_readable_localization}</Col>
                </Row>
                <Row>
                  <Col md="2">ATZ</Col>
                  <Col>{MadhelInfo.data.atz}</Col>
                </Row>
                <Row>
                  <Col md="2">Pistas</Col>
                  <Col>
                    <ul>
                      {MadhelInfo.data.rwy.map((rwy)=>(<li>{rwy}</li>))}
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">Cabeceras</Col>
                  <Col>
                    <ul>
                      {MadhelInfo.data.thr.map((thr)=>(<li>{thr}</li>))}
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">Telefonos</Col>
                  <Col>
                    <ul>
                      {MadhelInfo.data.telephone.map((person)=>(<li>{person}</li>))}
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col md="2">Combustible</Col>
                  <Col>{MadhelInfo.data.fuel}</Col>
                </Row>
                { (MadhelInfo.data.helpers_system.radio.length > 0 || MadhelInfo.data.helpers_system.visual.length > 0) && (
                  <Row>
                    <Col md="2">Asistencias</Col>
                    <Col md="8">
                      <Row>
                        <Col md="2">Radio</Col>
                        <Col>
                          <ul>
                            {MadhelInfo.data.helpers_system.radio.map((sys)=>(<li>{sys}</li>))}
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="2">Visual</Col>
                        <Col>{MadhelInfo.data.helpers_system.visual}</Col>
                      </Row>
                    </Col>
                  </Row>
                )}
              </Container>
            }
          </Container>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

MadhelInfo.propTypes = {}

export default MadhelInfo
