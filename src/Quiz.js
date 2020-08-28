import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

// Here we Import quiz_data.json into quizData
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  render() {
    /**
     * QuizQuestion   = Component
     * quiz_question  = props
     */
    return (
      <QuizQuestion
        quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
      />
    );
  }
}

export default Quiz;
