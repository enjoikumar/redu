import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCiKG65yPmHZ3MGILUsjRTduad3CDOBmqk';

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.querySelector('.container')
	);