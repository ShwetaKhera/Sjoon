import React from 'react';
import '../App.css';
import { Spinner, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from '../firebase.js';
import NavComponent from './components/nav';
import { imageGallery, mainForm } from '../styles/style';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      loading: true,
      show: false,
      modalImage: '',
    };
    this.changeAuth = this.changeAuth.bind(this);
  }

  componentDidMount() {
    this.getImagesFromFirebase();
  }
  addImages(obj) {
    var img = document.createElement('img');
    img.setAttribute('src', obj.src);
    img.setAttribute('id', document.getElementById('photos').childElementCount);
    img.onclick = () => {
      this.openModal(obj.src);
    };
    document.getElementById('photos').appendChild(img);
  }
  openModal(src) {
    console.log(src);
    this.setState({ modalImage: src });
    this.handleShow();
  }
  getImagesFromFirebase() {
    const imagesRef = ref(storage, 'images');
    listAll(imagesRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          console.log(itemRef);
          const imageRef = ref(storage, 'images/' + itemRef.name);
          getDownloadURL(imageRef).then((url) => {
            this.addImages({
              thumbnail: url,
              src: url,
            });
          });
        });
      })
      .then(() => this.setState({ loading: false }))
      .catch((error) => {
        console.log(error);
      });
  }
  changeAuth(auth) {
    this.setState({ isAuthenticated: auth });
    console.log('PRODUCTS: auth is ' + auth);
  }

  downloadImage = async () => {
    if (this.state.isAuthenticated) {
      const originalImage = this.state.modalImage;
      const image = await fetch(originalImage);

      //Split image name
      const nameSplit = originalImage.split('/');
      const duplicateName = nameSplit.pop();

      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = '' + duplicateName + '.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Please login to download the images for free! :)');
    }
  };
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  galleryView() {
    if (this.state.loading) {
      return (
        <>
          <Spinner animation="grow" variant="primary" className="spinner" />
          <Spinner animation="grow" variant="primary" className="spinner" />
          <Spinner animation="grow" variant="primary" className="spinner" />
        </>
      );
    } else {
      return <section id="photos"></section>;
    }
  }
  render() {
    return (
      <>
        <NavComponent changeAuth={this.changeAuth} background="dark" />

        <div id="imageGallery" style={imageGallery}>
          {this.galleryView()}
        </div>
        <Modal
          show={this.state.show}
          onHide={() => this.handleClose()}
          backdrop="static"
          keyboard={false}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <img src={this.state.modalImage} id="modalImage" />
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.downloadImage()}>
              Download
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Products;
