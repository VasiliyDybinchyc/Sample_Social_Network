import React from 'react';

import    * as axiosNews    from '../../axios/axios-news';
import    ErrorViews         from '../views/error';
import {  Button,
          Form,
          FormGroup,
          Label,
          Input,
          Col}         from 'reactstrap';

export default class PostNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = { countSymbol: 0,
                   error: false };
  }

  postNews(event) {
    event.preventDefault();
    let userId = this.props.userId;
    let data = new FormData()
    console.log('bad')
    data.append('message[content]', this.newsText.value)
    data.append('message[picture]', this.newsFile.files[0])

    axiosNews.postNews(userId, data).then(function () {
      axiosNews.getNews(userId);
    });
  }

  changeCountSymbol(event){
    this.setState({countSymbol: event.target.value.length})
  }

  seeEror(event){
    event.preventDefault();
    this.setState({error: true})
  }

  render() {
    return (
      <div>
        <h3>Add news</h3>
        {this.state.error == false ? null : <ErrorViews error={['Your message biger 335 symbols']} />}
        <Form id="newMessage">
          <FormGroup>
              <Label for="TextMessage">Text Message</Label>
              <Input type="textarea" name="TextMessage" getRef={(ref) => (this.newsText = ref)} id="TextMessage" onChange={this.changeCountSymbol.bind(this)} />
          </FormGroup>

          <FormGroup>
              <Label for="NewsFile">News File</Label>
              <Input type="file" name="NewsFile" getRef={(ref) => (this.newsFile = ref)} id="NewsFile" />
          </FormGroup>

          <p>You have remaining {335 - this.state.countSymbol} symbols</p>

          <Button color="primary"
                  onClick={this.state.countSymbol >= 336 ? this.seeEror.bind(this) : this.postNews.bind(this) }
                  className={this.state.countSymbol >= 336 ? 'disabled' : null}>
            Post
          </Button>
        </Form>

      </div>
    );
  }
};
