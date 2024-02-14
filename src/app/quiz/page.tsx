"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { quizQuestionsNew } from "../../../quiz";
import "../../../quiz.css";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  console.log({ selectedAnswer });

  const { questions } = quizQuestionsNew;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer: string, index: number) => {
    console.log({ answer, index, correctAnswer });
    if (answer === correctAnswer) {
      setSelectedAnswerIndex(index);
      setSelectedAnswer(true);
      toast.success("I knew you could do it.");
    } else {
      toast.error("Oh sweety no. Think harder, try again.", {});
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number: number) =>
    number > 9 ? number : `0${number}`;

  return (
    <div className="quiz-container max-w-lg min-w-0 bg-white  rounded-md mt-20 px-8 py-16">
      {!showResult ? (
        <div>
          <h1>{quizQuestionsNew.topic}</h1>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          {questions[activeQuestion].media ? (
            <>
              <video width="750" height="500" controls>
                <source src="/oooyea.mp4" type="video/mp4" />
              </video>
            </>
          ) : null}
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={`${
                  selectedAnswerIndex === index ? "selected-answer" : ""
                }
                `}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result space-x-5 flex flex-col items-center justify-center">
          <h3 className="mb-6">Result</h3>
          <p className="mb-5 text-justify">
            wow. congrats. 3 for 3. 100%. your intelligence knows no bounds.
          </p>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>

          <Link href={"/card"} passHref>
            <button>View Card</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Quiz;
