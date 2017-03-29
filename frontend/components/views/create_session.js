import React from 'react';
import {  Button,
          Form,
          FormGroup,
          Label,
          Input }         from 'reactstrap';

import { fourSpaces }     from '../../helper/helperFrontend';

import { onSubmitCreateSesion } from '../functionForComponent/testForTest'

export default React.createClass({

  getEmail: function() {
    return this.email.value;
  },

  getPassword: function() {
    return this.password.value;
  },

  render: function() {
    return (
      <div>
        <h1>Log In</h1>

        <Form inline>
          <FormGroup>
            <Label for="LoginEmail">Email</Label>{fourSpaces}
            <Input type="email" name="LoginEmail" getRef={(ref) => (this.email = ref)} id="LoginEmail" placeholder="Email" />
          </FormGroup>{fourSpaces}

          <FormGroup>
            <Label for="LoginPassword">Password</Label>{fourSpaces}
            <Input type="password" name="LoginPassword" getRef={(ref) => (this.password = ref)} id="LoginPassword" placeholder="Password" />
          </FormGroup>{fourSpaces}

          <Button id='sessionSubmitButton' color="success" onClick={this.props.onSubmit}>
            Log in
          </Button>
        </Form>
      </div>
    );
  }
});
