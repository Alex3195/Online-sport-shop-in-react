import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './MyNavbar.styles';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../img/nike logo/nike-logo-png-21192.png';
import Gif from '../../img/loading.gif';
import { Link, withRouter } from 'react-router-dom';

class MyNavbar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('MyNavbar will mount');
  }

  componentDidMount = () => {
    console.log('MyNavbar mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('MyNavbar will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('MyNavbar will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('MyNavbar did update');
  }

  componentWillUnmount = () => {
    console.log('MyNavbar will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
        <div className="card">
          <Navbar bg="light" variant="light">
          <Link to="/links" className="nav-link">
          <Image src={Gif} width="100px" height="70px" />
          </Link>
          <Image src={Logo} width="200px" height="70px" />
          <Container>
            <Navbar.Brand href="/home">New release</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/men">Men</Nav.Link>
              <Nav.Link href="/women">Women</Nav.Link>
              <Nav.Link href="/kids">Kids</Nav.Link>
              <Nav.Link href="/sale">Sale</Nav.Link>
              <Nav.Link href="/gifts">Gifts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </div>
    );
  }
}

MyNavbar.propTypes = {
  // bla: PropTypes.string,
};

MyNavbar.defaultProps = {
  // bla: 'test',
};

export default MyNavbar;
