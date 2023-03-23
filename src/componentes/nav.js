import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import App from '../App';
import { Link } from "react-router-dom";


function ColorSchemesExample() {
  return (
    <>
    

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link>MARTIN</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/inicio">Inicio </Link></Nav.Link>
            <Nav.Link><Link to="/Alumno">Alumno </Link></Nav.Link>
            <Nav.Link><Link to="/Carrusel">Carrusel </Link></Nav.Link>
            <Nav.Link><Link to="/Curriculum">Curriculum </Link></Nav.Link>
            <Nav.Link><Link to="/Universidad">Universidad </Link></Nav.Link>
            <Nav.Link><Link to="/Mapa">Mapa </Link></Nav.Link>
            <Nav.Link><Link to="/Mock">Mock </Link></Nav.Link>
            <Navbar.Brand><Link to="/login">Ingresar</Link></Navbar.Brand>




          </Nav>
        </Container>
      </Navbar>
      <br />
      

      <br />
      
    </>
  );
}

export default ColorSchemesExample;