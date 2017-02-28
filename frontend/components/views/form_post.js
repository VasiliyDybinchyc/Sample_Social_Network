import React from 'react';

import    * as axiosNews    from '../../axios/axios-news';

import {  Button,
          Form,
          FormGroup,
          Label,
          Input,
          Col}         from 'reactstrap';

export default React.createClass({

  getNewsText: function() {
    return this.newsText.value;
  },

  getNewsFile: function() {
    return this.newsFile.files[0];
  },

  render: function() {
    return (
      <div>
        <h3>Add news</h3>
        <Form id="newMessage">
          <FormGroup>
            <Col xs='4'>
              <Label for="TextMessage">Text Message</Label>
              <Input type="textarea" name="TextMessage" getRef={(ref) => (this.newsText = ref)} id="TextMessage" placeholder="Text Message" />
            </Col>
          </FormGroup>

          <FormGroup>
              <Label for="NewsFile">News File</Label>
              <Input type="file" name="NewsFile" getRef={(ref) => (this.newsFile = ref)} id="NewsFile" />
          </FormGroup>

          <Button color="primary" onClick={this.props.onSubmit}>
            Post
          </Button>
        </Form>
      </div>
    );
  }
});
