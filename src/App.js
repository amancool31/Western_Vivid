import React, { Component } from 'react';
import './App.css';
import {Segment,Grid,Button} from 'semantic-ui-react';
import Main from './components/mainHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Main />
      </div>
    );
  }
}

export default App;
