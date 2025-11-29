import { useState } from "react";
import Quiz from "./Quiz";
import QuizMenu from "./QuizMenu";
import "./App.css";

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizType, setQuizType] = useState("");

  const quizzes = {
    start: [
      {
        question: "Întrebare test 1",
        answers: ["A", "B", "C", "D"],
      },
      {
        question: "Întrebare test 2",
        answers: ["A", "B", "C", "D"],
      },
    ],
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setQuizType("");
  };

  return (
    <div className="container">
      {!selectedQuiz ? (
        <QuizMenu
          onSelectQuiz={(quizName) => {
            setQuizType(quizName);
            setSelectedQuiz(quizzes[quizName]); // IMPORTANT: aici primesc întrebările corecte
          }}
        />
      ) : (
        <Quiz questions={selectedQuiz} quizType={quizType} onRestart={resetQuiz} />
      )}
    </div>
  );
}

export default App;
