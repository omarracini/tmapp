import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import { AuthProvider } from "./Context/authContext";
import About from "./Components/Pages/About";
import Login from "./Components/Pages/LogIn";
import Registro from "./Components/Pages/Registro";
import Home from "./Components/Pages/Home";
import Create from "./Components/Pages/Create";
import { ProtectedRoute } from "./Components/Pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute>
                  <About />
                  <Create />
                </ProtectedRoute>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
