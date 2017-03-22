import React from 'react';
import { Link } from 'react-router';
import { checkIfYourOnBottomPage } from '../../helper/helperFrontend';

export default class AllUsers extends React.Component {

  constructor(props) {
    super(props);
    this.state = { end: 50};
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

  var Users,
      UsersLength = this.props.list.length,
      end = this.state.end;

  if (UsersLength > 0) {
    Users = this.props.list.slice(0, end).map( function(user, index) {
        return (
          <div key={index}>
            <Link to={"/users/" + user.id} activeClassName="active">
              <img src={user.avatar.url} id="mini-avatar" width="35" height="35" />
              {user.first_name + " " + user.last_name}
            </Link>
          </div>
        );
      });
    } else {
      Users = <p>К сожалению новостей нет</p>
    }

    return (
      <div id="News">
        <strong className={UsersLength > 0 ? 'All-news-title':'none'}>All users: {UsersLength}</strong>
        {Users}
      </div>
    );
  }
}
