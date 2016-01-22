import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';
export default class VideoList extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const videoListItems = this.props.videos.map((video) => <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect} />);
		return (
			<ul className='col-md-4 list-group'>
				{videoListItems}
			</ul>	
		);
	}
}