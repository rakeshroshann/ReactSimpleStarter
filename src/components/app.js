import React from 'react';
import { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';

const API_KEY='AIzaSyBRIz5D_uKMo_usA98jJKQcfxOLCvaDQ1E';

export default class App extends Component {
	constructor(props){
		super(props);
		this.state={videos: [] };
		this.videoSearch('surfboards');
	}
  videoSearch(term){
    YTSearch({key: API_KEY,term: term}, (data) => {
      this.setState({videos:data});
    });
  }

  render() {
    return (
    	<div>
      	<SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
      	<VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
