import React from 'react';
import { Link } from 'react-router';

export default class AllUsers extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 50};
  }

  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;

    if (windowBottom >= docHeight) {
      this.setState({
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

  var Users,
      UsersLength = this.props.list.length,
      end = this.state.end;

  if (UsersLength > 0) {
    Users = this.props.list.slice(0, end).map( function(user, index) {
        return (
          <div key={index}>
            <Link to={"/users/" + user.id} activeClassName="active">{user.email}</Link>
          </div>
        );
      });
    } else {
      Users = <p>К сожалению новостей нет</p>
    }

    return (
      <div className="Feed">
        <h1>News</h1>
        <div id="News">
          <strong className={UsersLength > 0 ? 'All-news-title':'none'}>All users: {UsersLength}</strong>
          {Users}
        </div>
      </div>
    );
  }
}
