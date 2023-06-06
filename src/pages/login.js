import React, { Component, useState} from 'react';
import {Form, Button, Container, Row, Col, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const txtFld = [
  {label: 'Email Address', type: 'text', placeholder: 'Enter Email'},
  {label: 'Password', type: 'password', placeholder: 'Enter Password'}
];

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    alert('SUBMISSION SUCCESSFUL!');
  };

  return (
    <center>
      <Card style={{ width: '30rem' } }>
        <Form onSubmit={handleSubmit}>
          {txtFld.map((field) => {
            return (          
                <Container Container fluid className='d-flex align-items-center justify-content-center'>
                  <Row></Row>
                  <Form.Group key={field.label}>
                  <Form.Label >{field.label}</Form.Label>
                  <Form.Control type={field.type} placeholder={field.placeholder}
                    onChange = {(e) => {
                      if (field.label === 'Email Address') {
                        setEmail(e.target.value);
                      } 
                      if (field.label === 'Password') {
                        setPassword(e.target.value);
                      }
                    }} />
                  </Form.Group>
                </Container>
            );
          })}

        <center>
            <Container>
              <Row>
                <Col></Col>
                <Col> 
                  <h2></h2>
                  <center> <Button variant="dark" type="submit">Submit</Button> </center>
                  <h1></h1> 
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col> <Form.Text >or sign in with</Form.Text> </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <center>
                    <Button variant="light" >
                      <img src={"./facebook.png"} alt="Facebook" height="20px" weight="20px" />
                    </Button>
                  </center>
                </Col>
                <Col>
                  <center>
                    <Button variant="light">
                      <img src={"./google.png"} alt="Google" height="20px" weight="20px" />
                    </Button>
                  </center>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          
          <Container>
              <Row>
                <Col></Col>
                <Col> </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <center>
                  <Form.Text>Email: {email} </Form.Text>
                  </center>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <center>
                  <Form.Text>Password: {password}</Form.Text>
                  </center>
                </Col>
                <Col></Col>
              </Row>
            </Container>
        </center>
                
        </Form>
        </Card>
    </center>

    
  )

};



export default Login;