
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';

function Registro () {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    setError('')
    try {
      await signup(user.email, user.password);
      navigate('/');
    }catch (error) {
      setError(error.message);
    }
    
  }

  return (
    <Container className='vh-100 gradient-custom py-5 h-100'>
      <Row className="d-flex justify-content-center align-items-center h-100">
        <Col xs={12} md={8} lg={6} xl={5}>
          <Card bg='dark' text='white' className="p-4 text-center" style={{ borderRadius: '1rem' }}>
            <Card.Body className="mb-md-5 mt-md-4 pb-1">
              <Card.Title className="fw-bold mb-2 text-uppercase">REGISTRO</Card.Title>
              <Card.Text className="text-white-50 mb-5">Por favor, introduce tus datos para registrarte!</Card.Text>
              <Form onSubmit={handleSubmit}>
                {/*
                <Form.Group className="form-outline form-white mb-4">
                  <Form.Control className="form-control form-control-lg" type='text' {...register('nombre', { maxLength: 25 })} required placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="form-outline form-white mb-4">
                  <Form.Control className="form-control form-control-lg" type='text' {...register('apellido', { maxLength: 25 })} required placeholder="Apellido" />
                </Form.Group>
                */}
                <Form.Group className="form-outline form-white mb-4">
                  <Form.Control 
                    className="form-control form-control-lg" 
                    name='email'
                    type='email' 
                    placeholder="Correo eléctronico" 
                    onChange={handleChange}
                    required 
                  />
                </Form.Group>
                <Form.Group className="form-outline form-white mb-4">
                  <Form.Control 
                    className="form-control form-control-lg" 
                    name='password'
                    type='password'  
                    placeholder="Contraseña"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Check type="checkbox" label="Acepto términos y condiciones" required />
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