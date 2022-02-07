import React, { Component } from "react";
import './cities-page.css';

export default class CitiesPage extends Component {

render() {
  return (
    <div className="cities-page">
      <header className="cities-page-header">
        <h1>
          Столицы
        </h1>
      </header>
      <div className="cities-selection">
          <div className="cities-variant">Текст 1</div>
          <div className="cities-variant">Текст 2</div>
          <div className="cities-variant">Текст 3</div>
          <div className="cities-variant">Текст 4</div>
      </div>
    </div>
  );
}
}
