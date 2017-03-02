import React from 'react';

import    * as axiosNews    from '../../axios/axios-news';

import {  Button,
          Form,
          FormGroup,
          Label,
          Input,
          Col}         from 'reactstrap';

export default React.createClass({

  postNews: function(event) {
    event.preventDefault();
    let userId = this.props.userId;

    let data = new FormData()

    data.append('message[content]', this.newsText.value)
    data.append('message[picture]', this.newsFile.files[0])

    axiosNews.postNews(userId, data).then(function () {
      axiosNews.getNews(userId);
    });
  },

  render: function() {
    return (
      <div>
        <h3>Add news</h3>
        <Form id="newMessage">
          <FormGroup>
              <Label for="TextMessage">Text Message</Label>
              <Input type="textarea" name="TextMessage" getRef={(ref) => (this.newsText = ref)} id="TextMessage" placeholder="Text Message" />
          </FormGroup>

          <FormGroup>
              <Label for="NewsFile">News File</Label>
              <Input type="file" name="NewsFile" getRef={(ref) => (this.newsFile = ref)} id="NewsFile" />
          </FormGroup>

          <Button color="primary" onClick={this.postNews}>
            Post
          </Button>
        </Form>
      </div>
    );
  }
});
