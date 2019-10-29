import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
      </div >
    );
  }
}

export default App;
