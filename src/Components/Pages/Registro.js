import React from 'react'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Registro = () => {

  
  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data) => {

  }

  return (
    <Container className='vh-100 gradient-custom'>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card bg='dark' text='white' className="p-4 text-center" style={{borderRadius: '1rem'}}>
            <Card.Body className="mb-md-5 mt-md-4 pb-3">
              <Card.Title className="fw-bold mb-2 text-uppercase">REGISTRO</Card.Title>
              <Card.Text className="text-white-50 mb-5">Por favor, introduce tus datos para registrarte!</Card.Text>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-4">
                  <Form.Control type='text' {...register('nombre', { maxLength: 25 })} required placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type='text' {...register('apellido', { maxLength: 25 })} required placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type='text' {...register('correo', {
                     pattern: {
                      value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                      message: 'Ingresa un correo valido'
                    }
                  })} required placeholder="Correo eléctronico" />
                  {errors.correo && <p>{errors.correo.message}</p>}
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control type='password' {...register('contraseña')} required placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Check type="checkbox" label="Acepto términos y condiciones" {...register('t&c')} required />
                </Form.Group>
                <Button variant="outline-light" size="lg" block type="submit">Registrarse</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Registro;