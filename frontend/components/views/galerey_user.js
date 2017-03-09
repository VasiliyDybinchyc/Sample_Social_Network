import React from 'react';
import { Link } from 'react-router';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { checkIfYourOnBottomPage } from '../../helper/helperFrontend';

export default class GalereyUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 20};
  }

  handleScroll() {
    var stateEnd = this.state.end;
    if (checkIfYourOnBottomPage()) {
      this.setState({
        end: stateEnd + 10
      })
    }
  }

  componentDidMount() {
    this.Scroll = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.Scroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.Scroll);
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
