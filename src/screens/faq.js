import React from 'react';
import NavComponent from './components/nav';

import { Accordion } from 'react-bootstrap';
import faq from '../img/faq/faq.jpg';
import { faqAccordian, faqBannerImg, faqBannerText } from '../styles/style';
import {
  answer1,
  question1,
  question2,
  answer2,
  question3,
  answer3,
  question4,
  answer4,
} from '../data/data';

class FAQ extends React.Component {
  render() {
    return (
      <>
        <NavComponent background="transparent" />
        <div class="container">
          <img src={faq} alt="Avatar" class="image" style={faqBannerImg} />
          <div style={faqBannerText}>
            <h3 style={{ marginTop: '10%' }}>
              Frequently Asked Questions (FAQs)
            </h3>
          </div>

          <Accordion style={faqAccordian}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{question1}</Accordion.Header>
              <Accordion.Body>{answer1}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{question2}</Accordion.Header>
              <Accordion.Body>{answer2}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>{question3}</Accordion.Header>
              <Accordion.Body>{answer3}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{question4}</Accordion.Header>
              <Accordion.Body>{answer4}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </>
    );
  }
}

export default FAQ;
