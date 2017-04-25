import React from 'react';

import    ErrorViews     from './error';

import   { postNews }    from '../../axios/axios-news';

import { Col,
         Form,
         Label,
         Input,
         Button,
         FormGroup }  from 'reactstrap';

export default class PostNews extends React.Component {

  constructor(props) {
    super(props);
    this.state = { countSymbol: 0,
                   error: false,
                   errorMessage: ''};
  }

  checkNews(event) {
    event.preventDefault();
    let userId = this.props.userId;
    let data = new FormData()

    data.append('message[content]', this.newsText.value)
    data.append('message[picture]', this.newsFile.files[0])

    if (data.get('message[picture]') !== 'undefined' ||
        data.get('message[content]') !== '')
    {
      postNews(userId, data)
      this.newsText.value = ''
      this.newsFile.value = ''
      this.resetError()
    }
    else {
      this.seeEror('You must write message or upload picture before post')
    }
  }

  changeCountSymbol(event){
    this.setState({countSymbol: event.target.value.length})
  }

  seeEror(message){
    this.setState({errorMessage: message})
    this.setState({error: true})
  }

  resetError(){
    this.setState({error: false})
    this.setState({errorMessage: ''})
  }

  render() {
    return (
      <div>
        <h3>Add news</h3>
        {this.state.error && <ErrorViews error={[this.state.errorMessage]} />}
        <Form id="newMessage">
          <FormGroup>
              <Label for="TextMessage">Text Message</Label>
              <Input type="textarea" name="TextMessage" getRef={(ref) => (this.newsText = ref)} id="TextMessage" onChange={this.changeCountSymbol.bind(this)} maxLength="335" />
          </FormGroup>

          <FormGroup>
              <Label for="NewsFile">News File</Label>
              <Input type="file" name="NewsFile" getRef={(ref) => (this.newsFile = ref)} id="NewsFile" />
          </FormGroup>

          <p>You have remaining {335 - this.state.countSymbol} symbols</p>

          <Button color="primary" onClick={ this.checkNews.bind(this) }>
            Post
          </Button>
        </Form>
      </div>
    );
  }
};
