import React from 'react';
import Surgery2 from './imageComponents/descriereSlideshow/Surgery2';
import Surgery3 from './imageComponents/descriereSlideshow/Surgery3';
import Presentation4 from './imageComponents/descriereSlideshow/Presentation4';
import Presentation5 from './imageComponents/descriereSlideshow/Presentation5';
import Diploma from './imageComponents/descriereSlideshow/Diploma';

export default class GeneralSlideshow extends React.Component {
  images = [<Diploma />, <Presentation4 />, <Presentation5 />, <Surgery2 />, <Surgery3 />];
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
    setInterval(this.changePhoto, 4000);
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