import React, { Component } from 'react';
import './flags-page.css';
import data from '../data.json';

let flagsData;
const QUESTIONS_COUNT = 10;

function getAnswer(answerType) {
  const index = Math.round(Math.random() * (flagsData.length - 1));
  const answer = flagsData[index];
  flagsData.splice(index, 1);
  const obj = { ...answer, answer: answerType, icon: false };
  return obj;
}

function getQuestion() {
  const flagsArray = [];

  flagsArray.push(getAnswer(true));
  flagsArray.push(getAnswer(false));
  flagsArray.push(getAnswer(false));
  flagsArray.push(getAnswer(false));

  flagsArray.sort(() => 0.5 - Math.random());

  return flagsArray;
}

export default class FlagsPage extends Component {

  state = {
    indexCurrentQuest: 0,
    questions: [],
    click: true,
    trueAnswer: 0
  }

  componentDidMount() {
    flagsData = [ ...data ];
    const questions = [];
    for (let i = 1; i <= QUESTIONS_COUNT; i++) {
      questions.push(getQuestion())
    }
    this.setState({ questions: questions });
  }

  clickToFlag = (answerObj) => {
    const { indexCurrentQuest, questions } = this.state;
    const question = questions[indexCurrentQuest];

    const answerIndex = question.indexOf(answerObj);

    const newQuest = [...question];
    newQuest.splice(answerIndex, 1, { ...answerObj, icon: true });

    if (answerObj.answer === false) {
      const trueAnswer = newQuest.find(({ answer }) => answer);
      const answerIndex = newQuest.indexOf(trueAnswer);
      newQuest.splice(answerIndex, 1, { ...trueAnswer, icon: true });
    } else {
      this.setState({ trueAnswer: this.state.trueAnswer + 1});
    }

    const newQuestions = [...questions];
    newQuestions.splice(indexCurrentQuest, 1, newQuest);
    this.setState({ questions: newQuestions, click: false });
  }

  setCurrentQuestion = () => {
    const current = this.state.indexCurrentQuest;
    this.setState({ indexCurrentQuest: current + 1, click: true });
  }

  showResults = () => {
    const { trueAnswer, questions } = this.state;
    this.props.click(trueAnswer, questions.length - trueAnswer);
  }

  render() {
    const { indexCurrentQuest, questions, click } = this.state;
    const question = questions[indexCurrentQuest];

    if (!question) {
      return null;
    }

    const trueAnswer = question.find(({ answer }) => answer);

    return (
      <div className="flags-page">
        <header className="flags-page-header">
          <h1>
            {trueAnswer.region}
          </h1>
        </header>
        <div className="question-counter-flags">{`${indexCurrentQuest + 1} / ${questions.length}`}</div>
        <div className="flags-selection">

          {question.map((answer) => (
            <div key={answer.id} className={`flags-variant${click ? ' enable' : ''}`} onClick={() => this.clickToFlag(answer)}>
              <img src={answer.flag} alt="Флаг" />
              {answer.icon && <img src={answer.answer ? "../../answers/green.png" : "../../answers/red.png"} className="flags-color" />}
              {answer.icon && <img src={answer.answer ? "../../answers/yes.png" : "../../answers/no.png"} className="icon" />}
            </div>
          ))}

        </div>
        {(click && <p className="flags-guess">Выберите правильный вариант</p>)
        || (!click && indexCurrentQuest < (questions.length - 1) && <div className="flags-btn" onClick={this.setCurrentQuestion}>Следующий</div>)}
        {!click && indexCurrentQuest === (questions.length - 1) && <div className="flags-btn" onClick={this.showResults}>Узнать результат</div>}
      </div>
    );
  }
}
