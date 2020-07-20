import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
];

export default class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}