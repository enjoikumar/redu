import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCiKG65yPmHZ3MGILUsjRTduad3CDOBmqk';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key:API_KEY, term: 'eric koston'}, (videos) => {
			this.setState({ videos });
			console.log(videos)
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

ReactDOM.render( <App />, document.querySelector('.container') );

//downwards data flow: 