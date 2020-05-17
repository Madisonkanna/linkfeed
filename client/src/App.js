import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [url, setUrl] = useState('')

  const onChange = e => {

    setUrl(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter a link.
        </p>
        <form>
          <label htmFor="url">urls</label>
          <input 
          onChange={onChange}
            value={url}>
          </input>
          <button type="button"></button>
        </form>
        <div>{url}</div>
      </header>
    </div>
  );
}

export default App;
