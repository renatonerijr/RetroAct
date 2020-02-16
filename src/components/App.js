import React, { Component } from 'react';
import logo from '../../public/React-Pixelated.png';
import './App.css';

class App extends Component {

    render() {
        const process = window.require('process')

        return (
            <div className="App">
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h2>Welcome to React</h2>
                  <p> This project is running Node {process.versions['node']} and NW.JS {process.versions['nw']}</p>
                  <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                  </p>
                </div>

            </div>
        );
    }
}

export default App;
