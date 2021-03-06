import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/8s1u9')
      .then(response => this.setState({ albums: response.data }));
  }
renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  );
}

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
