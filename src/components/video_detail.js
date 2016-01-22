import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class VideoDetail extends Component{
	constructor(props){
		super(props);
	}
	render(){
		if(!this.props.video)
			return null;
		const videoId = this.props.video.id.videoId;
		const videoUrl = `https://www.youtube.com/embed/${videoId}`;
		return (
			<div className='video-detail col-md-8'>
				<div className='embed-responsive embed-responsive-16by9'>
					<iframe className='embed-reponsive-item' src={videoUrl}></iframe>
				</div>
				<div className='details'>
					<div>{this.props.video.snippet.title}</div>
					<div>{this.props.video.snippet.description}</div>
				</div>
			</div>
		);
	}
}