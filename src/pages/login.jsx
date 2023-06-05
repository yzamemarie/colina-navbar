import React, { Component, setState} from 'react';
import { Form } from 'react-router-dom';

const fields = [
  { label: 'Email Address', type: 'text', placeholder: 'Input Email' },
  { label: 'Password', type: 'password', placeholder: 'Password' },
];

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
}

// eslint-disable-next-line
const [email, setEmail] = setState('');
// eslint-disable-next-line
const [password, setPassword] = setState('');

export default class login extends Component {
  
  render() {
    return (    

      <div>
        <section class="vh-100" >
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card shadow-2-strong">
                <div class="card-body p-5 text-center">

                  <h3 class="mb-5">Sign in</h3>

                  <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typeEmailX-2">Email</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                    <label class="form-label" for="typePasswordX-2">Password</label>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-4">
                    <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                  </div>

                  <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>                  
                  return (
                    <Form onSubmit={handleSubmit}>                        
                        {fields.map((field) => {
                          return (
                            <Form.Group classname="mb-3" controlId="formBasicEmail" key={field.label}>
                              <Form.Label>{field.label}</Form.Label>
                              <Form.Control
                                type={field.type}
                                placeholder={field.placeholder}
                                onChange={(e) => {
                                  if(field.label === 'Email') {
                                    setEmail(e.target.value);
                                  }
                                  if(field.label === 'Password') {
                                    setPassword(e.target.value);
                                  }
                                }}
                              />
                            </Form.Group>
                          )
                        })}
                    </Form>                     
                  )

                  <hr class="my-4"/>

                  <button class="btn btn-lg btn-block btn-primary" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                  <button class="btn btn-lg btn-block btn-primary mb-2" type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
}
