import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import SkillsList from './components/SkillsList/SkillsList';
import PersonalInfo from './components/PersonalInfo/PersonalInfo';


class App extends Component {

  constructor() {
    super();
    this.state = {
      language: "en"
    }
  }

  setToUkr = () => {
    this.setState({language: 'ukr'});
  }

  setToEng = () => {
    this.setState({language: 'en'});
  }

  render() {
    return (
        <div className="App">
          <Header language={this.state.language} setToEng={this.setToEng} setToUkr={this.setToUkr}/>
          <PersonalInfo language={this.state.language}/>
          <SkillsList language={this.state.language}/>
        </div>
    );
  }
}

export default App;
