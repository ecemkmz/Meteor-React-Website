import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { useParams } from "react-router-dom";
import { SkinTypeQuestions } from "../../../../../lib/collections/skinTypeQuestions";

export const SkinTypeTestDetail = () => {
  const { testId } = useParams();
  const skinTypeQuestions = useTracker(() =>
    SkinTypeQuestions.findOne({ testId: parseInt(testId) })
  );
  
  const skinTypeQuestion = skinTypeQuestions?.questions || [];
console.log(skinTypeQuestions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const question = skinTypeQuestion[currentQuestion]?.text;
  const choices = skinTypeQuestion[currentQuestion]?.choices;

  const onAnswerClick = (choice, index) => {
    setAnswerIdx(index);
  };

  const onClickNext = () => {
    const selectedQuestion = skinTypeQuestion[currentQuestion];
    const isCorrect = selectedQuestion.correctAnswer == answerIdx;

    setResult((prevResult) => ({
      score: prevResult.score + (isCorrect ? 5 : 0),
      correctAnswers: prevResult.correctAnswers + (isCorrect ? 1 : 0),
      wrongAnswers: prevResult.wrongAnswers + (isCorrect ? 0 : 1),
    }));

    if (currentQuestion === skinTypeQuestion.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
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
      wrongAnswers: 0,
    });
  };


  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{skinTypeQuestion.length}</span>
          <h2>{question}</h2>
          {choices && choices.length > 0 ? (
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
          ) : (
            <p>Loading...</p>
          )}
          <div className="footer">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === skinTypeQuestion.length - 1
                ? "Bitir"
                : "Devam"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Sonuç</h3>
          <p>
            Toplam Soru: <span>{skinTypeQuestion.length}</span>
          </p>
          <p>
            Toplam Puan: <span>{result.score}</span>
          </p>
          <p>
            Doğru Cevap: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Yanlış Cevap: <span>{result.wrongAnswers}</span>
          </p>
          <button onClick={onTryAgain}>Yeniden Dene</button>
        </div>
      )}
    </div>
  );
};