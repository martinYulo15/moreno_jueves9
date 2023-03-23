import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Login_face from './login_face';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './login';


function LoginChido() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <h1>Iniciar Sesión con:</h1>
            <br/>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
            <Row>
          <Col>
          <Login_face/>
          </Col>
          <Col>
            <Login />
          </Col>
          
        </Row>
      
             
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Correo Electronico' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recuerdame' />
            <a href="!#">¿Olvidaste tu contraseña?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Ingresar</MDBBtn>
          <p className="text-center">¿No estás registrado? <a href="#!">Registrate</a></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Ingresar con:</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">O:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Nombre' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Usuario' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Correo Electronico' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Contraseña' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Estoy de acuerdo con los terminos y condiciones' />
          </div>

          <MDBBtn className="mb-4 w-100">Ingresar</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default LoginChido;