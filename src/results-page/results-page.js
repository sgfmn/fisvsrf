import React, { Component } from "react";
import './results-page.css';

export default class ResultsPage extends Component {

render() {
  return (
    <div className="results-page">
      <header className="results-page-header">
        <h1>
            Ваш результат            
        </h1>
      </header>
      <div className="results">Правильные ответы: {this.props.results.trueAnswers}</div>
      <div className="results">Неправильные ответы: {this.props.results.falseAnswers}</div>
      <div className="btn-restart" onClick={this.props.restart}>Заново</div>
    </div>
  );
}
}
