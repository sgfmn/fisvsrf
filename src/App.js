import React, { Component } from "react";
import './App.css';

export default class App extends Component {

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Флаги и столицы всех субъектов Российской Федерации
        </h1>
      </header>
      <div className="block">Флаги</div>
      <div className="block">Столицы</div>
    </div>
  );
}
}
