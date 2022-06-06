import React from 'react';
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { config } from '../../config';
import { PublicClientApplication } from '@azure/msal-browser';
import {
  getDatabase,
  ref,
  query,
  equalTo,
  orderByChild,
  onValue,
  push,
} from 'firebase/database';

import { navbarBrand, navbarToggle, colorBlack } from '../../styles/style.js';

class NavComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isAuthenticated: false,
      user: {},
      accountId: '',
    };
    this.publicClientApplication = this.setupPublicClientApplication();
  }

  setupPublicClientApplication() {
    return new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true,
      },
    });
  }

  addCredentialToDatabase(details) {
    const db = getDatabase();
    const newUser = {
      homeAccountId: details.account.homeAccountId,
      username: details.account.username,
      dateCreated: new Date().toString(),
    };
    const userRef = query(
      ref(db, 'all_users'),
      orderByChild('username'),
      equalTo(newUser.username)
    );

    onValue(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            console.log(childSnapshot.val());
          });
        } else {
          push(ref(db, 'all_users'), newUser);
        }
      },
      {
        onlyOnce: true,
      }
    );
  }
  async login() {
    try {
      let loginRequest = {
        scopes: config.scopes,
        prompt: 'select_account',
      };
      await this.publicClientApplication
        .loginPopup(loginRequest)
        .then((res) => {
          this.setState({
            accountId: res.account.homeAccountId,
            isAuthenticated: true,
          });
          if (this.props.changeAuth != null) {
            this.props.changeAuth(true);
          }
          this.addCredentialToDatabase(res);
        });
    } catch (err) {
      console.log('Login Error: ' + err);
      this.setState({
        isAuthenticated: false,
        user: {},
        error: err,
      });
      console.log(this.props);
      if (this.props.changeAuth != null) {
        this.props.changeAuth(false);
      }
    }
  }

  async logout() {
    try {
      const logoutRequest = {
        account: this.publicClientApplication.getAccountByHomeId(
          this.state.accountId
        ),
        mainWindowRedirectUri: config.postLogoutRedirectUri,
      };
      await this.publicClientApplication.logoutPopup(logoutRequest);
      if (this.props.changeAuth != null) {
        this.props.changeAuth(false);
      }
    } catch (err) {
      console.log('Logout Error: ' + err);
      this.setState({
        error: err,
      });
      if (this.props.changeAuth != null) {
        this.props.changeAuth(true);
      }
    }
  }

  loginShow() {
    if (!this.state.isAuthenticated) {
      return (
        <Nav.Link
          onClick={() => {
            this.login();
          }}
          style={colorBlack}
        >
          Login
        </Nav.Link>
      );
    }
  }
  logoutShow() {
    if (this.state.isAuthenticated) {
      return (
        <Nav.Link
          onClick={() => {
            this.logout();
          }}
          style={colorBlack}
        >
          Logout
        </Nav.Link>
      );
    }
  }

  render() {
    return (
      <Navbar bg={this.props.background} expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" style={navbarBrand}>
            Sjoon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" style={navbarToggle} />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton />

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" style={colorBlack}>
                  Home
                </Nav.Link>
                {this.loginShow()}
                <Nav.Link href="/products" style={colorBlack}>
                  Images
                </Nav.Link>
                <Nav.Link href="/aboutUs" style={colorBlack}>
                  About Us
                </Nav.Link>
                <Nav.Link href="/contactUs" style={colorBlack}>
                  Contact Us
                </Nav.Link>
                <Nav.Link href="/faq" style={colorBlack}>
                  FAQ
                </Nav.Link>
                {this.logoutShow()}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  }
}

export default NavComponent;
