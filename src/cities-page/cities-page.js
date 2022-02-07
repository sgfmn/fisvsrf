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
      <div className="city-selection"></div>
    </div>
  );
}
}
