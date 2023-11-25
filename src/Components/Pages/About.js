
import { useAuth } from '../../Context/authContext';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Show from './Show';
import Edit from './Edit';
import Create from './Create';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function About() {

  const { user, logout, loading } = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };

  if (loading) return (<Card.Title className="fw-bold mb-2 ">Loading</Card.Title>)

  

  return (
    <Container className='vh-100 gradient-custom py-5 h-100'>
      <Card.Title className="fw-bold mb-2 text-uppercase">
        <Row className="align-items-center" >
          <Col xs={10}>
            Welcome {user.email} 
          </Col>
          <Col xs={2} className="d-flex justify-content-end">
            <Button 
              variant="outline-light" 
              size="lg" 
              block type="submit" 
              onClick={ handleLogout }>
                Logout{/*<FontAwesomeIcon icon={faPersonFromPortal} />*/}
            </Button>
          </Col>
        </Row>
      </Card.Title>
        <Card bg='dark' text='white' className="p-4 text-center" style={{ borderRadius: '1rem' }}>
          <Card.Title className="fw-bold mb-2 text-uppercase">Lista de Tareas</Card.Title>
            
            <BrowserRouter>
              <Routes>
                <Route path='/' element={ <Show /> } />
                <Route path='/create' element={ <Create /> } />
                <Route path='/edit/:id' element={ <Edit /> } />
              </Routes>
            </BrowserRouter>

          <Button href="Create.js" className="mt-3">Nueva Tarea</Button>
          <Button href="ver.html" className="mt-3">Ver Tarea</Button>
        </Card>
    </Container>
  )  
}
