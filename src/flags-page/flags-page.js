import React, { Component } from 'react';
import './flags-page.css';
import data from './data.json';

function getQuestion() {
  const flagsArray = [];
  const index = Math.round(Math.random() * (data.length - 1));
  const trueAnswer = data[index];
  const obj = { ...trueAnswer, answer: true };
  // console.log(obj);
  
  function fake(data, index) {
    const falseAnswer = data[index];
    // console.log(falseAnswer)
    for(let i = 1; i <= 3; i++) {
      if(falseAnswer !== trueAnswer) {
        const falseObj = { ...falseAnswer, answer: false };
      }
    }
    // console.log(obj1);
    return falseObj;
  }
  // console.log(fake(data, index));


  return flagsArray;
}

export default class FlagsPage extends Component {
  
  state = {
    currentQuest: 0,
    questions: []
  }

  componentDidMount() {
    const questions = [];
    for(let i = 1; i <= 10; i++) {
      questions.push(getQuestion())
    }
    this.setState({ questions: questions });
  }

  render() {
    return (
      <div className="flags-page">
        <header className="flags-page-header">
          <h1>
            Флаги
          </h1>
        </header>
        <div className="flags-selection">
          <div className="flags-variant"><img src="" alt="Флаг" /></div>
          <div className="flags-variant"><img src="" alt="Флаг" /></div>
          <div className="flags-variant"><img src="" alt="Флаг" /></div>
          <div className="flags-variant"><img src="" alt="Флаг" /></div>
        </div>
      </div>
    );
  }
}
