import React, { Component } from "react";
import Quiz from "./Quiz";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          {quizData.quiz_questions[0].instruction_text}
        </div>
      </div>
    );
  }
}

export default App;
