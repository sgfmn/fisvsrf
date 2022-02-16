import React, { Component } from 'react';
import './cities-page.css';
import data from '../data.json';

const cityData = data.filter((item) => item.city);
const QUESTIONS_COUNT = 8;

function getAnswer(answerType) {
  const index = Math.round(Math.random() * (cityData.length - 1));
  const answer = cityData[index];
  cityData.splice(index, 1);
  const obj = { ...answer, answer: answerType, responseColor: false };
  return obj;
}

function getQuestion() {
  const citiesArray = [];

  citiesArray.push(getAnswer(true));
  citiesArray.push(getAnswer(false));
  citiesArray.push(getAnswer(false));
  citiesArray.push(getAnswer(false));

  citiesArray.sort(() => 0.5 - Math.random());

  return citiesArray;
}

export default class CitiesPage extends Component {

  state = {
    indexCurrentQuest: 0,
    questions: [],
    click: true,
    trueAnswer: 0
  }

  componentDidMount() {
    const questions = [];
    for (let i = 1; i <= QUESTIONS_COUNT; i++) {
      questions.push(getQuestion())
    }
    this.setState({ questions: questions });
  }

  clickToCity = (answerObj) => {
    const { indexCurrentQuest, questions } = this.state;
    const question = questions[indexCurrentQuest];

    const answerIndex = question.indexOf(answerObj);

    const newQuest = [...question];
    newQuest.splice(answerIndex, 1, { ...answerObj, responseColor: true });

    if (answerObj.answer === false) {
      const trueAnswer = newQuest.find(({ answer }) => answer);
      const answerIndex = newQuest.indexOf(trueAnswer);
      newQuest.splice(answerIndex, 1, { ...trueAnswer, responseColor: true });
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
      <div className="cities-page">
        <header className="cities-page-header">
          <h1>
            {trueAnswer.region}
          </h1>
        </header>
        <div className="question-counter-cities">{`${indexCurrentQuest + 1} / ${questions.length}`}</div>
        <div className="cities-selection">

          {question.map((answer) => (
            <div key={answer.id} className={`cities-variant${click ? ' enable' : ''}`} onClick={() => this.clickToCity(answer)}>
              <div className="cities-variant">{answer.city}</div>
              {answer.responseColor && <img src={answer.answer ? "../../answers/green.png" : "../../answers/red.png"} className="cities-color" />}
            </div>
          ))}

        </div>
        {!click && indexCurrentQuest < (questions.length - 1) && <div className="btn" onClick={this.setCurrentQuestion}>Следующий</div>}
        {!click && indexCurrentQuest === (questions.length - 1) && <div className="btn" onClick={this.showResults}>Узнать результат</div>}
      </div>
    );
  }
}
