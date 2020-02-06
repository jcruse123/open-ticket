import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class TicketNavbar extends React.Component {
  render() {
    return(
      <Navbar variant="dark" bg="dark" expand="sm">
        <Navbar.Brand href="/">Open Ticket</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/new">New Ticket</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default TicketNavbar;
