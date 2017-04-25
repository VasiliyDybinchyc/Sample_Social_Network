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

  componentWillMount() {
    this.tamplateAllUserList()
  }

  componentDidMount() {
    this.Scroll = this.handleScroll.bind(this)
    window.addEventListener("scroll", this.Scroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.Scroll);
  }

  tamplateAllUserList() {

    let end = this.state.end;

    if (this.props.list.length > 0) {
      this.usersList = this.props.list.slice(0, end).map(function(user, index) {
          return (
            <div key={index}>
              <Link to={"/users/" + user.id} activeClassName="active">
                <img src={user.provider == 'github' ?
                          user.image :
                          user.croppersAvatar.url} id="mini-avatar" width="35" height="35" />
                {user.nickname}
              </Link>
            </div>
          );
        });
      } else {
        this.usersList = <p>User list empty how you see it?</p>
      }
  }

  render() {
    return (
      <div id="News">
        <strong className={this.props.list.length > 0 ? 'All-news-title':'none'}>All users: {this.props.list.length}</strong>
        {this.usersList}
      </div>
    );
  }
}
