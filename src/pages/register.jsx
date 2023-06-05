import React, { Component, useState } from 'react';
import { Form } from 'react-router-dom';

const fields = [
  { label: 'Email Address', type: 'text', placeholder: 'Input Email' },
  { label: 'Password', type: 'password', placeholder: 'Password' },
];

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
}


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

export default class register extends Component {
  render() {
    return (      
        <div>
        <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
              <div class="card shadow-2-strong card-registration">
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>

                    <div class="row">
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="firstName" class="form-control form-control-lg" />
                          <label class="form-label" for="firstName">First Name</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <div class="form-outline">
                          <input type="text" id="lastName" class="form-control form-control-lg" />
                          <label class="form-label" for="lastName">Last Name</label>
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 d-flex align-items-center">

                        <div class="form-outline datepicker w-100">
                          <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                          <label for="birthdayDate" class="form-label">Birthday</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4">

                        <h6 class="mb-2 pb-1">Gender: </h6>

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" checked />
                          <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                          <label class="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                          <label class="form-check-label" for="otherGender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="email" id="email" class="form-control form-control-lg" />
                          <label class="form-label" for="email">Email</label>
                        </div>

                      </div>
                      <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                          <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                          <label class="form-label" for="phoneNumber">Phone Number</label>
                        </div>

                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">

                        <select class="select form-control-lg">
                          <option value="1" disabled>Select option: </option>
                          <option value="2">Apple</option>
                          <option value="3">Banana</option>
                          <option value="4">Mango</option>
                        </select>
                        <label class="form-label select-label">Choose option</label>

                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                      <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
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
                    </div>
                  </form>
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
