import React from 'react'
import { Container, Row, Col, Card, CardText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Container className='vh-100 gradient-custom py-5 h-100'>
      <Card bg='dark' text='white' className="p-2" style={{borderRadius: '1rem'}} >  
        <Row>
          <Col md={8} style={{ marginLeft: '2px' }}>
            {['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ].map((day) => (
              <Card bg='secondary' text='light' key={day} className="p-1 mb-1">
                <Card.Title className="text-left">{day}</Card.Title>
                <Card.Body>
                  {/* Aquí puedes agregar tu lista de tareas para cada día */}
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col md={4} style={{ marginLeft: '-2px' }}>
            <Card bg='secondary' text='light' className="p-1 mb-1">
              <Card.Title className="text-center">Checks</Card.Title>
              <Card.Body>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={faCheck} /> _______________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={faCheck} /> _______________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={faCheck} /> _______________________
                </CardText>
              </Card.Body>
            </Card>
            <Card bg='secondary' text='light' className="p-1 mb-1">
              <Card.Title className="text-center">Metas</Card.Title>
              <Card.Body>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa1} /> _______________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa2} /> _______________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa3} /> _______________________
                </CardText>
              </Card.Body>
            </Card>
            <Card bg='secondary' text='light' className="p-1 mb-1">
              <Card.Title className="text-center">Notas</Card.Title>
              <Card.Body>
                <CardText className='text-center'>
                  _______________________
                </CardText>
                <CardText className='text-center'>
                  _______________________
                </CardText>
                <CardText className='text-center'>
                  _______________________
                </CardText>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
