import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 20};
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.setState({
        message:'bottom reached',
        end: this.state.end + 10
      })
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  render() {

  var newsItems = this.props.news_items,
      galereyItems = this.props.galerey_items,
      fullGalerey = newsItems.concat(galereyItems),

      end = this.state.end;

  if (1 > 0) {
    fullGalerey = fullGalerey.slice(0, end).map( function(galerey, index) {
        return (
          <div key={index}>
            {galerey.picture.url == null ? null : <ListGroupItem> <img src={galerey.picture.url} alt="lorem" /> </ListGroupItem>}
          </div>
        );
      });
    } else {
      fullGalerey = <p>"You don't have picture in galerey"</p>
    }

    return (
      <div className="Feed">
        <h1>Galerey</h1>
        <div id="Galerey">
          <ListGroup>
            {fullGalerey}
          </ListGroup>
        </div>
      </div>
    );
  }
}
