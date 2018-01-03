import React, { Component } from 'react';
import '../style/App.css';
import Spinner from './Spinner';
import IncrementDisplay from '../containers/increment_disp'
import ResetButton from "../containers/reset_button";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Spinner />
        </header>
        <IncrementDisplay className="incre" buttonLabel="Increment" payload={1} number_disp={true}/>
        <IncrementDisplay className="incre" buttonLabel="Decrement" payload={-1} number_disp={false}/>
        <ResetButton className="reset"/>
      </div>
    );
  }



}

export default App;
