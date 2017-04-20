import React from 'react';

import ErrorViews         from './error';

import { postGallerey }  from '../../axios/axios-gallerey';

import { Col,
         Form,
         Label,
         Input,
         Button,
         FormGroup }  from 'reactstrap';

export default class PostGallerey extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  postGalerey(event) {
    event.preventDefault();

    let userId = this.props.userId;

    let data = new FormData()

    data.append('gallery[picture]', this.gelereyFile.files[0])

    if (data.get('gallery[picture]') !== 'undefined') {
      postGallerey(userId, data);
      this.setState({error: false})
      this.gelereyFile.value = ''

    } else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div>
        <h3>Add picture in galerey</h3>
        {this.state.error && <ErrorViews error={['You must upload picture before post']} />}
        <Form id="newGelerey">

          <FormGroup>
              <Label for="GelereyFile">Galerey File</Label>
              <Input type="file" name="GelereyFile" getRef={(ref) => (this.gelereyFile = ref)} id="GelereyFile" />
          </FormGroup>

          <Button color="primary" onClick={this.postGalerey.bind(this)}>
            Post picture
          </Button>
        </Form>
      </div>
    );
  }
};
