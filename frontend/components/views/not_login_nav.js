import React              from 'react';
import { browserHistory } from 'react-router';
import { fourSpaces }     from '../../helper/helperFrontend';
import {  Navbar,
          Nav,
          NavbarBrand,
          NavItem,
          Collapse,
          Button }  from 'reactstrap';

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
          <NavItem>
            <Button color="primary" onClick={this.handleClickSignUp}>
              Sign up
            </Button>
          </NavItem>{fourSpaces}

          <NavItem>
            <Button color="success" onClick={this.handleClickLogin}>
              Log in
            </Button>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
    );
  }
};
