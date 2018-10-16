import React, { Component } from 'react';
import './App.css';
import {Segment,Grid,Button} from 'semantic-ui-react';
import Main from './components/mainHeader';
import {Loader,Dimmer} from 'semantic-ui-react';
import auth from "./Firebase_config";
import firebase from 'firebase';

class App extends Component {
  constructor()
  {
    super();
    this.state={
      rendr:false
    }
  }
  componentDidMount()
  {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({rendr:true})
      }
      else
      {
        setTimeout(() => {
          this.setState({rendr:true})
        }, 1000);
      }
    })
  }
  render() {
    return (
      <div className="App">
          
           {
             this.state.rendr==false?
             <Dimmer active inverted >
               <Loader>Loading..</Loader>
             </Dimmer>
             :
             <Main />
           }
        
      </div>
    );
  }
}

export default App;
