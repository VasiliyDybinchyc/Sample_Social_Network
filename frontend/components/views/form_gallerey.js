import React from 'react';

import    * as axiosGallerey  from '../../axios/axios-gallerey';

import {  Button,
          Form,
          FormGroup,
          Label,
          Input,
          Col}         from 'reactstrap';

export default React.createClass({
  
  postGalerey: function() {
    let userId = this.props.user.id;

    let data = new FormData()

    data.append('gallery[picture]', this.gelereyFile.files[0])

    axiosNews.postGallerey(userId, data).then(function () {
      axiosNews.getGallerey(userId);
    });
  },

  render: function() {
    return (

      <div>
        <h3>Add news</h3>
        <Form id="newGelerey">

          <FormGroup>
              <Label for="GelereyFile">News File</Label>
              <Input type="file" name="GelereyFile" getRef={(ref) => (this.gelereyFile = ref)} id="GelereyFile" />
          </FormGroup>

          <Button color="primary" onClick={this.postGalerey}>
            Post Galerey
          </Button>
        </Form>
      </div>
    );
  }
});
