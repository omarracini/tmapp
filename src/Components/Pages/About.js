
import { useAuth } from '../../Context/authContext';
import { Container, Card, Button } from 'react-bootstrap';

export default function About() {

  const { user, logout, loading } = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };

  if (loading) return (<Card.Title className="fw-bold mb-2 ">Loading</Card.Title>)

  return (
    <Container className='vh-100 gradient-custom py-5 h-100'>
      <Card.Title className="fw-bold mb-2 text-uppercase">Welcome {user.email} </Card.Title>
      <Button 
        variant="outline-light" 
        size="lg" 
        block type="submit" 
        onClick={ handleLogout }>
          logout
        </Button>
    </Container>
  )  
}
