import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a link.
        </p>
        <form>
          <label htmFor="url">urls</label>
          <input 
          onChange={e => setUrl(e.target.value)}
            value={url}>
          </input>
          <button></button>
        </form>
        <div>{url}</div>
      </header>
    </div>
  );
}

export default App;
