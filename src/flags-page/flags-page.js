import React, { Component } from 'react';
import './flags-page.css';
import data from './data.json';
import { click } from '@testing-library/user-event/dist/click';

function getAnswer(answerType) {
  const index = Math.round(Math.random() * (data.length - 1));
  const answer = data[index];
  data.splice(index, 1);
  const obj = { ...answer, answer: answerType, icon: false };
  return obj;
}

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

  clickToFlag = (answerObj) => {
    const { indexCurrentQuest, questions } = this.state;
    const question = questions[indexCurrentQuest];

    const answerIndex = question.indexOf(answerObj);

    const newQuest = [ ...question ];
    newQuest.splice(answerIndex, 1, { ...answerObj, icon: true });

    if(answerObj.answer === false) {
      const trueAnswer = newQuest.find((element, index, array) => {

      })
    }

    const newQuestions = [ ...questions ];
    newQuestions.splice(indexCurrentQuest, 1, newQuest);
    this.setState({ questions: newQuestions });
    // console.log(newQuestions);
  }

  render() {
    const { indexCurrentQuest, questions } = this.state;
    const question = questions[indexCurrentQuest];
    
    if (!question) {
        return null;
    }

    const trueAnswer = question.find((answerObject) => {
      return answerObject.answer;
    });

    // const trueAnswer = question.find(({ answer }) => answer);

    return (
      <div className="flags-page">
        <header className="flags-page-header">
          <h1>
            {trueAnswer.region}
          </h1>
        </header>
        <div className="flags-selection">

        {question.map((answer) => (
          <div key={answer.id} className="flags-variant" onClick={() => this.clickToFlag(answer)}>
            <img src={answer.flag} alt="Флаг" />
            {answer.icon && <img src={answer.answer ? "yes.png" : "no.png"} className="icon" />}
          </div>
        ))}

        </div>
      </div>
    );
  }
}
