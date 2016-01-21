import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state={
			term:''
		};
	}
	render(){
		return <input onChange={(event) => this.setState({term: event.target.value})} value={this.state.term}/>;
	}
}