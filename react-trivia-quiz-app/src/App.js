import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import CategorySelector from "./components/CategorySelector";
import Scoreboard from "./components/Scoreboard";
import Question from "./components/Question";
import ResultModal from "./components/ResultModal";
import useTrivia from "./useTrivia";

export default function App() {
  const { question, getQuestion, category, setCategory } = useTrivia();
  const [isCorrect, setIsCorrect] = useState(null);

  function handleQuestionAnswered(answer) {
    console.log(answer);
    const isAnswerCorrect = answer === question.correct_answer;

    setIsCorrect(isAnswerCorrect);
  }

  function handleNextQuestion() {
    setIsCorrect(null);
    getQuestion();
  }

  return (
    <div className="app">
      {isCorrect !== null && (
        <ResultModal
          isCorrect={isCorrect}
          question={question}
          getQuestion={handleNextQuestion}
        />
      )}
      <div className="question-header">
        <CategorySelector category={category} chooseCategory={setCategory} />
        <Scoreboard isCorrect={isCorrect} />
      </div>
      <div className="question-main">
        {question && (
          <Question
            question={question}
            answerQuestion={handleQuestionAnswered}
          />
        )}
      </div>
      <div className="question-footer">
        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
