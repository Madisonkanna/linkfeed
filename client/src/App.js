import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {
	const urlState = {
		urls: useState([])
	}
	const _refs = {
		newUrl: undefined
	}
	return (
		<div className="App">
			<div className="addUrl">
				<form onSubmit={e => {
					// by default submitted forms reload a page 
					// for some reason.. prevent that: 
					e.preventDefault()
					// building the new array and setting it to 
					// the state:
          console.log(urlState.urls[1], '0 and 1')
					urlState.urls[1]([
						// destructure old urls into new array
						...urlState.urls[0],
						// add new url value to array
						_refs.newUrl.value
					])

					// clear the input value.. i think this is 
					// how you can do it lol: 
					_refs.newUrl.value = ''
				}}>
					<div>
						<label>
							New url: 
							<input
								ref={r => { _refs.newUrl = r }}
							/>
						</label>
					</div>
					<div>
						<button type="submit">Add!</button>
					</div>
				</form>
			</div>
			<div className="urls">{
				urlState.urls[0].map(url => <div>{url}</div>)
			}</div>
		</div>
	)
}




export default App;


