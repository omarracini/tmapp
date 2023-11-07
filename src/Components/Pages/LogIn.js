import { useState } from 'react';
import { useAuth } from '../../Context/authContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Card, Form, Button, CardText } from 'react-bootstrap';

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  
  const { Login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({target: {name, value} }) =>
    setUser({ ...user, [name]: value});

  const handleSubmit = async e =>{
    e.preventDefault()
    setError('')
    try {
      await Login(user.email, user.password);
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
              <Card.Title className="fw-bold mb-2 text-uppercase">Login</Card.Title>
              <Card.Text className="text-white-50 mb-5">Por favor, introduce tus datos para iniciar sesión!</Card.Text>
              <Form>
                <Form.Group className="form-outline form-white mb-4">
                  <Form.Control type="email" id="email" className="form-control form-control-lg" required placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group className="form-outline form-white mb-4">
                  <Form.Control type="password" id="password" className="form-control form-control-lg" required placeholder="Contraseña" />
                </Form.Group>
                <p className="small mb-5 pb-lg-2"><a href="#!" className="text-white-50">Olvidaste tu contraseña?</a></p>
                <Button variant="outline-light" size="lg" block type="submit">Login</Button>
              </Form>
              {/* Aquí van tus íconos de redes sociales */}
              <CardText className="mb-0 mt-4">
                No tienes cuenta?
                <NavLink 
                  exact 
                  to='/registro'
                  activeClassName='active'
                  className='nav-links'
                  
                >
                  Registrate
                </NavLink>
              </CardText>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
