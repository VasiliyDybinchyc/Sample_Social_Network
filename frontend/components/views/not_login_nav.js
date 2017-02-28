import React from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav, NavbarBrand, NavItem, Collapse } from 'reactstrap';

export default class NotLoginNav extends React.Component{

  handleClickSignUp() {
    browserHistory.push('/signup')
  }
  handleClickLogin() {
    browserHistory.push('/login')
  }

  render() {
    return (
    <div>
      <Navbar color="faded" light toggleable>

        <NavbarBrand> Sample Social Network </NavbarBrand>

        <Nav className="ml-auto" navbar>
          <NavItem className="col-8">
            <button type="button" className="btn btn-primary" onClick={this.handleClickSignUp}>
              Sign up
            </button>
          </NavItem>

          <NavItem className="col-9">
            <button type="button" className="btn btn-success" onClick={this.handleClickLogin}>
              Log in
            </button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
    );
  }
};
