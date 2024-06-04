import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    console.log(apiUrl)
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <h1>Environment Variables in React</h1>
                <p>API URL: {apiUrl}</p>
                <p>API Key: {apiKey}</p>
            </header>
        </div>
    );
}

export default App;
