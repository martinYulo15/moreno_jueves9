import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Mapa from "./componentes/mapa";
import Carrusel from "./componentes/carrusel";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Maps from "./componentes/mapa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "./componentes/login";
import Logout from "./componentes/logout";
import LoginChido from "./componentes/LoginChido";
import Login_face from "./componentes/login_face";
import ColorSchemesExample from "./componentes/nav";

function App() {
  return (
    <Router>
     <ColorSchemesExample/>
        <hr />
        <Switch>
          <Route path="/Inicio">
          <Container className="mt-5">
            <center><h1>INICIO</h1></center>
            <br/>
        <Row>
          <Col>
            <h2>MÉTODO RENDER</h2>
            <p>
              El término “render prop” se refiere a una técnica para compartir
              código entre componentes en React utilizando una propiedad cuyo
              valor es una función. Un componente con una render prop toma una
              función que devuelve un elemento de React y lo llama en lugar de
              implementar su propia lógica de representación.
            </p>
          </Col>
          <Col>
            <h2>MÉTODO STRICT MODE</h2>
            <p>
              StrictMode es una herramienta para destacar problemas potenciales
              en la aplicación. Al igual que Fragment, StrictMode no renderiza
              nada en la interfaz de usuario. Este modo también activa
              advertencias y comprobaciones adicionales para sus descendientes.
            </p>
          </Col>
          <Col>
            <h2>MÉTODO RETURN</h2>
            <p>
              La sentencia return se emplea para salir de la secuencia de
              ejecución de las sentencias de un método y, opcionalmente,
              devolver un valor. Tras la salida del método se vuelve a la
              secuencia de ejecución del programa al lugar de llamada de dicho
              método.
            </p>
          </Col>
        </Row>
      </Container>
     

      <center><button className="btn btn-dark">Ir a Github</button></center>
        
          
    
          </Route>
          <Route path="/Alumno">
          <center><h1>Martin Moreno Lopez 5A</h1></center>
          <center><img src={require('.//img/mrtn.png')} /></center>

          </Route>
          <Route path="/Carrusel">
          <center><Carrusel /></center>
          </Route>
          <Route path="/Curriculum">
          <center><img src={require('.//componentes/Martin Moreno Lopez.png')} /></center>
          <Route path="/Universidad">
          <center><img src={require('.//img/UTD.png')} /></center>
          </Route>
          </Route>
          <Route path="/Mapa">
            <Maps />
          </Route>
          <Route path="/Mock">
          <center><img src={require('.//img/img.png')} /></center>
          </Route>
          <Route path="/login">
            <center><LoginChido/></center>
            <center><Login /></center>
           <center><Logout /></center> 
           <center><Login_face /></center> 

          </Route>
        </Switch>
      
    </Router>
    
  );
}

export default App;