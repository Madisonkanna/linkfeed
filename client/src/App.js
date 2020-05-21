import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const [urls, setUrl] = useState([]);
	const _refs = {
		newUrl: undefined
	};
	return (
		<div className="App">
			<div className="addUrl">
				<form
					onSubmit={e => {
						e.preventDefault();
						setUrl([...urls, _refs.newUrl.value]);
						_refs.newUrl.value = '';
					}}
				>
					<div>
						<label>
							New url:
							<input
								ref={r => {
									_refs.newUrl = r;
								}}
							/>
						</label>
					</div>
					<div>
						<button type="submit">Add!</button>
					</div>
				</form>
			</div>
			<div className="urls">{urls.map(url => <div>{url}</div>)}</div>
		</div>
	);
};

export default App;
