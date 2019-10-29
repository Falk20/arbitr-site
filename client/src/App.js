import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';

class App extends React.Component {
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
