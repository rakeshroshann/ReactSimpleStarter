import React, {Component} from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyBRIz5D_uKMo_usA98jJKQcfxOLCvaDQ1E';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], currentSelectedVideo: null};
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      this.setState({
        videos: data,
        currentSelectedVideo: data[0]
      });
    });
  }

  selectVideo(video) {
    this.setState({
      currentSelectedVideo: video
    });
  }

  render() {
    const videoSearch = _.debounce((term)=> {
      this.videoSearch(term)
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.currentSelectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={video=> this.selectVideo(video)}/>
      </div>
    );
  }
}
