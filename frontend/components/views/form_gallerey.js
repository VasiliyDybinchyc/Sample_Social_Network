import React from 'react';

import    * as axiosGallerey  from '../../axios/axios-gallerey';

import {  Button,
          Form,
          FormGroup,
          Label,
          Input,
          Col}         from 'reactstrap';

export default React.createClass({

  postGalerey: function(event) {
    event.preventDefault();
    let userId = this.props.userId;

    let data = new FormData()

    data.append('gallery[picture]', this.gelereyFile.files[0])

    axiosGallerey.postGallerey(userId, data).then(function () {
      axiosGallerey.getGallerey(userId);
    });
  },

  render: function() {
    return (

      <div>
        <h3>Add picture in galerey</h3>
        <Form id="newGelerey">

          <FormGroup>
              <Label for="GelereyFile">Galerey File</Label>
              <Input type="file" name="GelereyFile" getRef={(ref) => (this.gelereyFile = ref)} id="GelereyFile" />
          </FormGroup>

          <Button color="primary" onClick={this.postGalerey}>
            Post picture
          </Button>
        </Form>
      </div>
    );
  }
});
