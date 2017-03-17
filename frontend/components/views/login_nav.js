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

  handleClickProfile() {
    browserHistory.push('/profile')
  }
  handleClickEditProfile() {
    browserHistory.push('/editProfile')
  }
  handleClickAllUser() {
    browserHistory.push('/AllUser')
  }
  handleClickGalerey(userId) {
    browserHistory.push('/Galerey/' + userId + '/page/1')
  }
  handleClickAllFrend(userId) {
    browserHistory.push('/allFrend/' + userId)
  }

  render() {
    var userId = this.props.userId

    return (

      <div>
        <Navbar color="faded" light toggleable >

          <NavbarBrand> Sample Social Network </NavbarBrand>

          <Nav className="ml-auto" navbar >

            <NavItem>
              <NavLink onClick={this.handleClickProfile} style={{cursor: 'pointer'}} > My profile </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.handleClickEditProfile} style={{cursor: 'pointer'}}> Edit my Profile </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={this.handleClickAllUser} style={{cursor: 'pointer'}}> All user </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => {this.handleClickGalerey(userId)} } style={{cursor: 'pointer'}}> My Galerey </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => {this.handleClickAllFrend(userId)} } style={{cursor: 'pointer'}}> My Friend </NavLink>
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
