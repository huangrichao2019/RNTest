import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    // eslint-disable-next-line react-native/no-inline-styles
    return <Image source={pic} style={{width: 193, height: 110}} />;
  }
}
