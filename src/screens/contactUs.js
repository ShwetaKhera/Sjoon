import React from 'react';
import NavComponent from './components/nav';
import { Card, Row } from 'react-bootstrap';

import {
  cardHeaderUS,
  cardHeaderIndia,
  contactBannerImg,
  contactBannerText,
  contactCardUS,
  contactCardIndia,
} from '../styles/style';
import customercare from '../img/contactus/customercare.jpg';

class ContactUs extends React.Component {
  render() {
    return (
      <>
        <NavComponent background="transparent" />
        <div class="container">
          <img
            src={customercare}
            alt="Avatar"
            class="image"
            style={contactBannerImg}
          />
          <div style={contactBannerText}>
            <h3 style={{ marginTop: '10%' }}>We'd love to hear from you</h3>
            <h6 style={{ marginTop: '1.5%' }}>
              Want to get in touch? Here's how you can reach us.
            </h6>
          </div>
          <>
            <Row xs={1} md={2} className="g-4">
              <Card style={contactCardUS}>
                <Card.Header
                  style={{
                    padding: '15px',
                  }}
                >
                  <div style={cardHeaderUS} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>San Francisco, USA</Card.Title>
                  <Card.Text style={{ fontSize: '13px' }}>
                    1222 Bayhill Drive, Suite 2000, <br />
                    San Bruno, CA 98888 <br />
                    Office: +1 838 545 1209 (Mon-Fri) <br />
                    Sales/Support: +1 888 555 1209 (Mon-Fri)
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={contactCardIndia}>
                <Card.Header
                  style={{
                    padding: '15px',
                  }}
                >
                  <div style={cardHeaderIndia} />
                </Card.Header>
                <Card.Body>
                  <Card.Title>Gujarat, India</Card.Title>
                  <Card.Text style={{ fontSize: '13px' }}>
                    SP Info City, Block N, <br />
                    50 ABC Road, Ahmedabad 360 003 <br />
                    Office: +91 83 8545 1209 (Mon-Fri) <br />
                    Sales/Support: +91 88 8555 1209 (Mon-Fri)
                  </Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </>
        </div>
      </>
    );
  }
}

export default ContactUs;
