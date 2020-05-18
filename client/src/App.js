import React, { useReducer, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function reducer(state, action) {
	const { currentUrls, pastUrls } = state;
	if (action.type === 'ADD') {
		return {
			currentUrls: [
				...currentUrls,
				{
					id: Math.random(),
					link: action.value
				}
			]
		};
	}
	return;
}

function App() {
	const input = useRef();
	const [urls, dispatch] = useReducer(reducer, {
		currentUrls: [],
		pastUrls: []
	});

	const addUrl = e => {
		e.preventDefault();
		console.log(input.current.value);
		dispatch({
			type: 'ADD',
			value: input.current.value
		});
		input.current.value = '';
	};

	return (
		<div className="App">
			<header className="App-header">
				<form onSubmit={addUrl}>
					<label htmFor="url">urls</label>
					<input ref={input} />
					<button type="submit" type="button" />
				</form>

				<div>
					Urls:
          <ul>
				  {urls.currentUrls.map(url => <li key={url.id}>{url.link}</li>)}
          </ul>
	
				</div>
			</header>
		</div>
	);
}

export default App;
