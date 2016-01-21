import React from 'react';
import { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY='AIzaSyBRIz5D_uKMo_usA98jJKQcfxOLCvaDQ1E';
YTSearch({key: API_KEY,term: 'surfboards'}, (data) => {
	console.log(data);
});
export default class App extends Component {
  render() {
    return (
    	<div>
      	<SearchBar/>
      </div>
    );
  }
}
