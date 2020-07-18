import React from 'react';
import Surgery2 from './imageComponents/descriereSlideshow/Surgery2';
import Surgery3 from './imageComponents/descriereSlideshow/Surgery3';
import Presentation4 from './imageComponents/descriereSlideshow/Presentation4';
import Presentation5 from './imageComponents/descriereSlideshow/Presentation5';

export default class GeneralSlideshow extends React.Component {
  images = [<Surgery2 />, <Surgery3 />, <Presentation4 />, <Presentation5 />];
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
    setInterval(this.changePhoto, 3000);
  }

  render() {
    const { photoIndex } = this.state;

    return (
      <div style={{
        height: 500 + "px",
        maxWidth: 800 + "px",
        marginTop: 2 + "em",
        paddingLeft: 6 + "%",
      }}>
        {
          this.images.length > 0 && this.images[photoIndex]
        }
      </div>
    )
  }

}