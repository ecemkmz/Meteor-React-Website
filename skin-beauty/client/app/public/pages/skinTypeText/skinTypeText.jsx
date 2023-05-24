import React, { useState } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { SkinTypeQuestions } from "../../../../../lib/collections/skinTypeQuestions";

export const SkinTypeText = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  });

  const skinTypeQuestions = useTracker(() => SkinTypeQuestions.find({}).fetch());
  
  const question = skinTypeQuestions[currentQuestion]?.text;
  const choices = skinTypeQuestions[currentQuestion]?.choices;

  const onAnswerClick = (choice, index) => {
    setAnswerIdx(index);
  };

  const onClickNext = () => {
    const selectedQuestion = skinTypeQuestions[currentQuestion];
    const isCorrect = selectedQuestion.correctAnswer == answerIdx;

    setResult(prevResult => ({
      score: prevResult.score + (isCorrect ? 5 : 0),
      correctAnswers: prevResult.correctAnswers + (isCorrect ? 1 : 0),
      wrongAnswers: prevResult.wrongAnswers + (isCorrect ? 0 : 1)
    }));

    if (currentQuestion === skinTypeQuestions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setAnswerIdx(null);
    }
  };

  const onTryAgain = () => {
    setCurrentQuestion(0);
    setAnswerIdx(null);
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    });
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{skinTypeQuestions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((choice, index) => (
              <li
                onClick={() => onAnswerClick(choice, index)}
                key={choice}
                className={answerIdx === index ? "selected-answer" : null}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === skinTypeQuestions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Questions: <span>{skinTypeQuestions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Try again</button>
        </div>
      )}
    </div>
  );
};
