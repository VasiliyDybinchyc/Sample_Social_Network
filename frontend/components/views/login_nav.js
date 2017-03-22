import React              from 'react';
import { browserHistory } from 'react-router';
import { fourSpaces }     from '../../helper/helperFrontend';
import {  Navbar,
          Nav,
          NavbarBrand,
          NavItem,
          NavLink,
          Collapse,
          Button }        from 'reactstrap';


export default class LoginNav extends React.Component{

  render() {
    var userId = this.props.userId

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
              <NavLink onClick={() => browserHistory.push('/Galerey/' + userId + '/page/1') } style={{cursor: 'pointer'}}> My Galerey </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => browserHistory.push('/allFrend/' + userId) } style={{cursor: 'pointer'}}> My Friend </NavLink>
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
