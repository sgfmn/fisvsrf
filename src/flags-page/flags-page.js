import React, { Component } from "react";
import './flags-page.css';

export default class FlagsPage extends Component {

render() {
  return (
    <div className="flags-page">
      <header className="flags-page-header">
        <h1>
          Флаги
        </h1>
      </header>
      <div className="flags-selection">
          <div className="flags-variant"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png" /></div>
          <div className="flags-variant"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png" /></div>
          <div className="flags-variant"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/250px-Flag_of_Switzerland_%28Pantone%29.svg.png" /></div>
          <div className="flags-variant"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/250px-Flag_of_Macau.svg.png" /></div>
      </div>
    </div>
  );
}
}
