import React              from 'react';
import { browserHistory } from 'react-router';
import { fourSpaces }     from '../../helper/helperFrontend';

import { Nav,
         Navbar,
         Button,
         NavItem,
         NavLink,
         NavbarBrand }        from 'reactstrap';


export default class LoginNav extends React.Component{

  render() {
    return (
      <div>
        <Navbar color="faded" light toggleable >

          <NavbarBrand> Sample Social Network </NavbarBrand>

          <Nav className="ml-auto" navbar >

            <NavItem>
              <NavLink onClick={() => browserHistory.push('/profile')} style={{cursor: 'pointer'}} > My profile </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={() => browserHistory.push('/editProfile')} style={{cursor: 'pointer'}}> Edit my Profile </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={() => browserHistory.push('/AllUser')} style={{cursor: 'pointer'}}> All user </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={() => browserHistory.push('/Galerey/' + this.props.userId + '/page/1') } style={{cursor: 'pointer'}}> My Galerey </NavLink>
            </NavItem>

            <NavItem>
              <NavLink onClick={() => browserHistory.push('/allFrend/' + this.props.userId) } style={{cursor: 'pointer'}}> My Friend </NavLink>
            </NavItem>

            <NavItem>
              <Button color="danger" onClick={this.props.onSubmit} style={{cursor: 'pointer'}}>
                Log Out
              </Button>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
};
