import america from '../img/contactus/america.png';
import india from '../img/contactus/india.png';

// nav.js

const colorBlack = { color: 'Black' };
const mainNavbar = { position: 'absolute', top: 0, zIndex: 999, width: '100%' };
const navbarBrand = {
  color: 'white',
  background: 'rgb(0 0 0 / 1%)',
  fontFamily: 'fangsong',
};
const navbarToggle = { background: '#ffffff63', border: 'none' };

// aboutUs.js

const bannerImg = {
  top: 0,
  position: 'absolute',
  left: 0,
  height: '55vh',
  width: '100%',
  objectFit: 'cover',
};
const bannerText = {
  height: '55vh',
  width: '100%',
  top: 0,
  position: 'absolute',
  left: 0,
  backgroundColor: 'rgb(0 0 0 / 80%)',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'monospace',
  letterSpacing: '2px',
};
const header3 = { marginTop: '10%' };
const header6 = { marginTop: '1.5%' };
const bannerData = {
  position: 'absolute',
  top: '65%',
  left: '12.5%',
  margin: 'auto auto',
  textAlign: 'center',
  maxWidth: '75%',
  fontFamily: 'ui-monospace',
};
const aboutUsFooter = { textAlign: 'center', paddingTop: 50 };

// contactUs.js

const contactBannerImg = {
  top: 0,
  position: 'absolute',
  left: 0,
  height: '55vh',
  width: '100%',
  objectFit: 'cover',
};
const contactBannerText = {
  height: '55vh',
  width: '100%',
  top: 0,
  position: 'absolute',
  left: 0,
  backgroundColor: 'rgb(0 0 0 / 80%)',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'monospace',
  letterSpacing: '2px',
};
const contactCardUS = {
  width: '21rem',
  marginTop: '29%',
  fontFamily: 'Monospace',
  marginLeft: '10%',
  padding: 'initial',
  border: 'none',
};
const contactCardIndia = {
  width: '21rem',
  marginTop: '29%',
  fontFamily: 'Monospace',
  marginLeft: '20%',
  padding: 'initial',
  border: 'none',
};
const cardHeaderUS = {
  height: '40px',
  backgroundImage: `url(${america})`,
  width: '40px',
  borderRadius: '50px',
  margin: 'auto',
  backgroundSize: '100% 100%',
};
const cardHeaderIndia = {
  backgroundImage: `url(${india})`,
  height: '40px',
  width: '40px',
  borderRadius: '50px',
  margin: 'auto',
  backgroundSize: '100% 100%',
};

// FAQ
const faqBannerImg = {
  top: 0,
  position: 'absolute',
  left: 0,
  height: '55vh',
  width: '100%',
  objectFit: 'cover',
};
const faqBannerText = {
  height: '55vh',
  width: '100%',
  top: 0,
  position: 'absolute',
  left: 0,
  backgroundColor: 'rgb(0 0 0 / 80%)',
  color: 'white',
  textAlign: 'center',
  fontFamily: 'monospace',
  letterSpacing: '2px',
};
const faqAccordian = {
  position: 'absolute',
  width: '80%',
  top: '60%',
};

// Home
const carousel = { position: 'absolute', top: 0 };
const carouselItem = { height: '100vh', filter: 'brightness(70%)' };
const carouselHeader = {
  position: 'absolute',
  top: '50%',
  left: '10%',
  zIndex: 999,
  color: 'white',
  letterSpacing: '10px',
  fontFamily: 'fangsong',
  lineHeight: '60px',
};
// Products
const mainForm = { position: 'absolute', top: '10%', left: '1%', width: '98%' };
const imageGallery = {
  position: 'absolute',
  top: '10%',
  padding: '20px',
  width: '100%',
};
export {
  colorBlack,
  mainNavbar,
  navbarBrand,
  navbarToggle,
  bannerImg,
  bannerText,
  header3,
  header6,
  bannerData,
  aboutUsFooter,
  contactBannerImg,
  contactBannerText,
  contactCardUS,
  contactCardIndia,
  cardHeaderUS,
  cardHeaderIndia,
  faqBannerImg,
  faqBannerText,
  faqAccordian,
  carousel,
  carouselItem,
  carouselHeader,
  mainForm,
  imageGallery,
};
