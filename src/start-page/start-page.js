import React, { Component } from "react";
import './start-page.css';

export default class StartPage extends Component {

render() {
  const { click } = this.props;
  return (
    <div className="start-page">
      <header className="start-page-header">
        <h1>
          Флаги и столицы всех субъектов Российской Федерации
        </h1>
      </header>
      <div className="start-page-block" onClick={() => click('flags-page')}>Флаги</div>
      <div className="start-page-block" onClick={() => click('cities-page')}>Столицы</div>
    </div>
  );
}
}
