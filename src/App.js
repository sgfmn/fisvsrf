import React, { Component } from "react";
import './App.css';
import StartPage from './start-page/start-page';
import FlagsPage from './flags-page/flags-page';
import CitiesPage from './cities-page/cities-page';

export default class App extends Component {

state = {
  page: 'start-page',
}

changePage = (pageType) => {
  this.setState({ page: pageType })
}

render() {
  const { page } = this.state;
  return (
    <div>
      {page === 'start-page' && <StartPage click={this.changePage}/>}
      {page === 'flags-page' && <FlagsPage />}
      {page === 'cities-page' && <CitiesPage />}
    </div>
  );
}
}
