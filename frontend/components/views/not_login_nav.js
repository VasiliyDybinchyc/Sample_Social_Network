import React              from 'react';

import { browserHistory } from 'react-router';

import { fourSpaces }     from '../../helper/helperFrontend';

import { Nav,
         Navbar,
         Button,
         NavItem,
         NavLink,
         NavbarBrand }        from 'reactstrap';


export default class NotLoginNav extends React.Component{

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable>

          <NavbarBrand> Sample Social Network </NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button color="primary" onClick={() => browserHistory.push('/signup')}>
                Sign up
              </Button>
            </NavItem>{fourSpaces}

            <NavItem>
              <Button color="success" className={'loginButton'} onClick={() => browserHistory.push('/login')}>
                Log in
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
};
