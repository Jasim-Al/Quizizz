import React from "react";
import { useParams } from "react-router-dom";
import Quiz from "../../components/Quiz/Quiz";

const Questions = [
  {
    question: "Which planet in our solar system is known as the Red planet?",
    options: [
      { title: "Alexander Fleming", answer: false },
      { title: "Alexander Graham Bell", answer: false },
      { title: "Thomas Alva Edison", answer: false },
      { title: "Mars", answer: true },
    ],
    answered: false,
  },
  {
    question: "Who invented light bulb?",
    options: [
      { title: "Mars", answer: false },
      { title: "Thomas Alva Edison", answer: true },
      { title: "Jupiter", answer: false },
      { title: "Alexander Graham Bell", answer: false },
    ],
    answered: false,
  },
  {
    question: "Who discovered Penicillin?",
    options: [
      { title: "Alexander Graham Bell", answer: false },
      { title: "Alexander Fleming", answer: true },
      { title: "Thomas Alva Edison", answer: false },
      { title: "Jupiter", answer: false },
    ],
    answered: false,
  },
  {
    question: "Who invented phone?",
    options: [
      { title: "Alexander Fleming", answer: false },
      { title: "Alexander Graham Bell", answer: true },
      { title: "Thomas Alva Edison", answer: false },
      { title: "Mars", answer: false },
    ],
    answered: false,
  },
];

function QuizPage() {
  const { index } = useParams();
  return (
    <div>
      <Quiz quiz={Questions[index]} index={index} />
    </div>
  );
}

export default QuizPage;
