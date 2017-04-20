import React          from 'react';

import Cropper        from 'react-cropper'

import { Col,
         Form,
         Label,
         Input,
         Button,
         FormGroup }  from 'reactstrap';

export default React.createClass({

  getInitialState: function() {
    return({Cropper: ''})
  },

  getFirstName: function() {
    return this.name.value || this.props.user.first_name;
  },

  getLastName: function() {
    return this.surname.value || this.props.user.last_name;
  },

  getAvatar: function() {
    return this.avatar.files[0];
  },

  getCroppersAvatar: function() {
      try {
      return this.refs.cropper.getCroppedCanvas().toDataURL();
    } catch (error) {
      return undefined;
    }
  },

  changeCropp: function() {
    var file = this.avatar.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file)

    reader.onloadend = function (e) {
      this.setState({
        Cropper: reader.result,
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

            <div className="box" style={{position: 'fixed', width: 400, height: 400, paddingLeft: '40%', paddingTop: '5%'}}>
              <div className="img-preview" style={{ width: 400, height: 400, overflow: 'hidden'}} />
            </div>

            <Col xs='4'>
              <Label for="Avatar">Avatar</Label>
              <Input type="file" name="Avatar" getRef={(ref) => (this.avatar = ref)} id="Avatar" onChange={this.changeCropp} />
              <Cropper src={this.state.Cropper} guides={false} preview=".img-preview" ref="cropper" style={{height: 400, width: '100%'}} viewMode={1} />
            </Col>

          </FormGroup>

          <Button color="success" onClick={this.props.onSubmit}>
            Change Me
          </Button>
        </Form>
      </div>
    );
  }
});
