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
          <div className="cities-variant">Чита</div>
          <div className="cities-variant">Симферополь</div>
          <div className="cities-variant">Петропавловск-Камчатский</div>
          <div className="cities-variant">Нижний Новгород</div>
      </div>
    </div>
  );
}
}
