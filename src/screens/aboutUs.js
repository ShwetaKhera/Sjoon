import React from 'react';
import NavComponent from './components/nav';

import empower1 from '../img/about/empower1.jpg';
import {
  aboutUsFooter,
  bannerData,
  bannerImg,
  bannerText,
  header3,
  header6,
} from '../styles/style';
import { aboutUs, mission, photos, photoSource, team } from '../data/data';
class AboutUs extends React.Component {
  render() {
    const paddingtop = { paddingTop: 50 };
    return (
      <>
        <NavComponent background="transparent" />
        <div class="container">
          <img src={empower1} alt="Avatar" class="image" style={bannerImg} />
          <div style={bannerText}>
            <h3 style={header3}>Empowering Creators</h3>
            <h6 style={header6}>
              By providing free stock photos Sjoon helps millions of <br />
              creators all over the world to easily create beautiful products
              <br />
              and designs.
            </h6>
          </div>

          <div style={bannerData}>
            <div>
              <h2>About Us</h2>
              <h4>{aboutUs}</h4>
            </div>

            <div style={paddingtop}>
              <h2>Photos</h2>
              <h4>{photos}</h4>
            </div>

            <div style={paddingtop}>
              <h2>Photo Sources</h2>
              <h4>{photoSource}</h4>
            </div>

            <div style={paddingtop}>
              <h2>Team</h2>
              <h4>{team}</h4>
            </div>

            <div style={paddingtop}>
              <h2>Mission</h2>
              <h4>{mission}</h4>
            </div>

            <div style={paddingtop}>
              <h2>Contribute</h2>
              <h4>Upload your own pictures to support the Sjoon community:</h4>
            </div>
            <p style={aboutUsFooter}>
              And don't forget to share, like and follow Sjoon on Instagram,
              Facebook and Twitter :)
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
