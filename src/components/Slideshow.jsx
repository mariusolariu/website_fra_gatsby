import React from 'react';
import { MyImage } from './MyImage';

export default class Slideshow2 extends React.Component {
  state = {
    photoIndex: 0,
    images: [],
  }

  changePhoto = () => {
    let { photoIndex, images } = this.state;
    photoIndex = ++photoIndex % images.length;

    this.setState({
      photoIndex
    });
  }

  componentDidMount = () => {
    const { imagesRelPaths } = this.props;

    const images = imagesRelPaths.map((relativePath) => (
      <MyImage
        filename={`${relativePath}`}
        alt="website image"
      />
    ));

    this.setState({ images })

    setInterval(this.changePhoto, 3000);
  }

  render() {
    const { photoIndex, images } = this.state;
    return (
      <div style={{ maxWidth: 400 + "px", maxHeight: 400 + "px" }}>
        {
          images.length > 0 && images[photoIndex]
        }
      </div>
    )
  }

}