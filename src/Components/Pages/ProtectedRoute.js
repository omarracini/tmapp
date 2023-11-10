import { CardText } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
    const {user, loading} = useAuth();

    if (loading) return <CardText>Loading</CardText>;

    if (!user) return <Navigate to={'/login'}/>;

    return <> { children } </>;
    
}