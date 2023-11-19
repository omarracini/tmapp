
import { useAuth } from '../../Context/authContext';
import { Container, Card, Button, Row, Col, ListGroup } from 'react-bootstrap';

export default function About() {

  const { user, logout, loading } = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };

  if (loading) return (<Card.Title className="fw-bold mb-2 ">Loading</Card.Title>)

  return (
    <Container className='vh-100 gradient-custom py-5 h-100'>
        <Card.Title>
            <Row className="align-items-center" >
                <Col xs={10}>
                    Welcome {user.email} 
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                    <Button 
                    variant="outline-light" 
                    size="lg" 
                    block type="submit" 
                    onClick={ handleLogout }
                    >
                        logout
                    </Button>
                </Col>
            </Row>
        </Card.Title>
        <Card bg='dark' text='white' className="p-4 text-center" style={{ borderRadius: '1rem' }}>
            <Card.Title className="fw-bold mb-2 text-uppercase">Crear tarea</Card.Title>
{/*         
          <Form.Group>
            <Form.Label>Filtrar por Categoría o Etiqueta:</Form.Label>
            <Form.Control as="select">
              <option value="categoria1">Categoría 1</option>
              <option value="categoria2">Categoría 2</option>
              
            </Form.Control>
          </Form.Group>
          <ProgressBar now={60} label={`${60}%`} />
*/}          
            <ListGroup className="mt-3">
                <ListGroup.Item><a href="ver.html">Tarea 1</a></ListGroup.Item>
                <ListGroup.Item><a href="ver.html">Tarea 2</a></ListGroup.Item>
                <ListGroup.Item><a href="ver.html">Tarea 3</a></ListGroup.Item>
                {/* Agrega más tareas aquí */}
            </ListGroup>
          
        </Card>
    </Container>
  )  
}