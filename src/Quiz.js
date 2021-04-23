import React, { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  render() {
    let quizData = require("./quiz_data.json");
    let text = quizData.quiz_questions[0].instruction_text;
    return <div className="QuizQuestion">{text}</div>;
  }
}

export default Quiz;
