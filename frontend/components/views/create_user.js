import React from 'react';
import Cropper from 'react-cropper'
import {  Button,
          Form,
          FormGroup,
          Label,
          Input,
          Col}         from 'reactstrap';

export default React.createClass({

  getInitialState: function() {
    return({test: ''})
  },

  getFirstName: function() {
    return this.name.value;
  },

  getLastName: function() {
    return this.surname.value;
  },

  getEmail: function() {
    return this.email.value;
  },

  getPassword: function() {
    return this.password.value;
  },

  getPasswordConf: function() {
    return this.password_confirmation.value;
  },

  changeCropp: function() {
    var file = this.avatar.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file)

    reader.onloadend = function (e) {
      this.setState({
        test: reader.result,
      })
    }.bind(this);
  },

  render: function() {
    return (
      <div>
        <h1>Sign Up</h1>
        <Form>
          <FormGroup>
            <Col xs='4'>
              <Label for="SignUpName">Name</Label>
              <Input type="text" name="SignUpName" getRef={(ref) => (this.name = ref)} id="SignUpName" placeholder="Name" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs='4'>
              <Label for="SignUpSurname">Surname</Label>
              <Input type="text" name="SignUpSurname" getRef={(ref) => (this.surname = ref)} id="SignUpSurname" placeholder="Surname" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs='4'>
              <Label for="SignUpEmail">Email</Label>
              <Input type="email" name="SignUpEmail" getRef={(ref) => (this.email = ref)} id="SignUpEmail" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs='4'>
              <Label for="SignUpPassword">Password</Label>
              <Input type="password" name="SignUpPassword" getRef={(ref) => (this.password = ref)} id="SignUpPassword" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col xs='4'>
              <Label for="SignUpPasswordConfirmation">Password Confirmation</Label>
              <Input type="password" name="SignUpPasswordConfirmation" getRef={(ref) => (this.password_confirmation = ref)} id="SignUpPasswordConfirmation" placeholder="Password Confirmation" />
            </Col>
          </FormGroup>

          <Button color="success" onClick={this.props.onSubmit}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
});
