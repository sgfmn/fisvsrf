import React, { Component } from "react";
import StartPage from './start-page/start-page';
import FlagsPage from './flags-page/flags-page';
import CitiesPage from './cities-page/cities-page';
import ResultsPage from './results-page/results-page';

export default class App extends Component {

state = {
  page: 'start-page',
  results: null
}

changePage = (pageType) => {
  this.setState({ page: pageType })
}

showResults = (trueAnswers, falseAnswers) => {
  const results = { trueAnswers, falseAnswers };
  this.setState({ results, page: 'results-page' });
}

render() {
  const { page, results } = this.state;
  return (
    <div>
      {page === 'start-page' && <StartPage click={this.changePage} />}
      {page === 'flags-page' && <FlagsPage click={this.showResults} />}
      {page === 'cities-page' && <CitiesPage />}
      {page === 'results-page' && <ResultsPage results={results} restart={() => this.changePage('start-page')} />}
    </div>
  );
}
}
