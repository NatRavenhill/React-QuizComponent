import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    constructor(props){
        super(props);
        this.handleClick =this.handleClick.bind(this);
        this.state = {
          incorrectAnswer: false
        };
    }

  handleClick(buttonText) {
    if(buttonText === this.props.quiz_question.answer){
      this.setState({
        incorrectAnswer: false
      });
      this.props.showNextQuestionHandler();
    }
    else {
      this.setState({
        incorrectAnswer: true
      });
    }
  }

  render() {
    let question = this.props.quiz_question;
    return (
      <main>
        {this.state.incorrectAnswer ? 
          <p className='error'>Sorry, that's not right</p> :
          null}
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
