import React from 'react';
import Diploma from './imageComponents/descriereSlideshow/Diploma';
import Surgery1 from './imageComponents/descriereSlideshow/Surgery1';
import Surgery2 from './imageComponents/descriereSlideshow/Surgery2';
import Surgery3 from './imageComponents/descriereSlideshow/Surgery3';
import Surgery4 from './imageComponents/descriereSlideshow/Surgery4';
import Surgery5 from './imageComponents/descriereSlideshow/Surgery5';
import Surgery6 from './imageComponents/descriereSlideshow/Surgery6';
import Surgery7 from './imageComponents/descriereSlideshow/Surgery7';

// FIXME: get a replacement, this is a bad photo and is hard to display because is not panoramic and is poor quality
import Surgery8 from './imageComponents/descriereSlideshow/Surgery8';
import Surgery9 from './imageComponents/descriereSlideshow/Surgery9';
import Surgery10 from './imageComponents/descriereSlideshow/Surgery10';
import Surgery11 from './imageComponents/descriereSlideshow/Surgery11';

const SLIDESHOW_INTERVAL_MS = 2500;
export default class GeneralSlideshow extends React.Component {

  images = [<Surgery1 />, <Surgery2 />, <Surgery3 />, <Surgery4 />, <Surgery5 />,
  <Diploma />, <Surgery6 />, <Surgery7 />, <Surgery9 />,
  <Surgery10 />, <Surgery11 />,];

  state = {
    photoIndex: 0,
  }

  changePhoto = () => {
    let { photoIndex } = this.state;

    photoIndex = ++photoIndex % this.images.length;

    this.setState({
      photoIndex
    });
  }

  componentDidMount = () => {
    setInterval(this.changePhoto, SLIDESHOW_INTERVAL_MS);
  }

  render() {
    const { photoIndex } = this.state;

    return (
      <div style={{
        maxHeight: 500 + "px",
        maxWidth: 900 + "px",
        marginTop: 2 + "em",
        marginBottom: 3 + "em",
        // border: "1px solid green"
      }}>
        {
          this.images.length > 0 && this.images[photoIndex]
        }
      </div>
    )
  }

}