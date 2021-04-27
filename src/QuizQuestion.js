import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.handleClick =this.handleClick.bind(this);
    }

  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
  }

  render() {
    let question = this.props.quiz_question;
    return (
      <main>
        <section>
          <p>{question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((a) => {
              return (
                <QuizQuestionButton
                  key={question.answer_options.indexOf(a)}
                  button_text={a}
                  clickHandler = {this.handleClick}
                />
              );
            })}
            ;
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
