import React, { Component } from 'react';
import './flags-page.css';
import data from './data.json';

function getQuestion() {
  const flagsArray = [];

  flagsArray.push(getAnswer(true));
  flagsArray.push(getAnswer(false));
  flagsArray.push(getAnswer(false));
  flagsArray.push(getAnswer(false));

  flagsArray.sort(() => {
    return 0.5 - Math.random();
  })

  return flagsArray;
}

function getAnswer(answerType) {
  const index = Math.round(Math.random() * (data.length - 1));
  const answer = data[index];
  data.splice(index, 1);
  const obj = { ...answer, answer: answerType, icon: false };
  return obj;
}

export default class FlagsPage extends Component {

  state = {
    indexCurrentQuest: 0,
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
    const { indexCurrentQuest, questions } = this.state;
    const question = questions[indexCurrentQuest];
    
    if (!question) {
        return null;
    }

    // const trueAnswer = question.find((answerObject) => {
    //   return answerObject.answer;
    // });

    const trueAnswer = question.find(({ answer }) => answer);

    return (
      <div className="flags-page">
        <header className="flags-page-header">
          <h1>
            {trueAnswer.region}
          </h1>
        </header>
        <div className="flags-selection">

        {question.map((answer) => (
          <div key={answer.id} className="flags-variant">
            <img src={answer.flag} />
          </div>
        ))}

        </div>
      </div>
    );
  }
}

