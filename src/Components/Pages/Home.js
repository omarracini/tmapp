import React from 'react';
import { Container, Row, Col, Card, CardText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';

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
                  <FontAwesomeIcon icon={faCheck} /> __________________________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={faCheck} /> __________________________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={faCheck} /> __________________________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={faCheck} /> __________________________________
                </CardText>
              </Card.Body>
            </Card>
            <Card bg='secondary' text='light' className="p-1 mb-1">
              <Card.Title className="text-center">Metas</Card.Title>
              <Card.Body>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa1} /> __________________________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa2} /> __________________________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa3} /> __________________________________
                </CardText>
                <CardText className='text-center'>
                  <FontAwesomeIcon icon={fa4} /> __________________________________
                </CardText>
              </Card.Body>
            </Card>
            <Card bg='secondary' text='light' className="p-1 mb-1">
              <Card.Title className="text-center">Notas</Card.Title>
              <Card.Body>
                <CardText className='text-center'>
                  _________________________________
                </CardText>
                <CardText className='text-center'>
                  _________________________________
                </CardText>
                <CardText className='text-center'>
                  _________________________________
                </CardText>
                <CardText className='text-center'>
                  _________________________________
                </CardText>
                <CardText className='text-center'>
                  _________________________________
                </CardText>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
