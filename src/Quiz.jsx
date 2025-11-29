import { useState, useRef, useEffect } from "react";
import Buttons from "./Buttons";

function Quiz({ questions, quizType, onRestart }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showingQuestion, setShowingQuestion] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [answerCounts, setAnswerCounts] = useState(
    new Array(questions[0].answers.length).fill(0)
  );

  const buttonsRef = useRef(null);

  useEffect(() => {
    if (buttonsRef.current) {
      buttonsRef.current.classList.remove("fade-in");
      void buttonsRef.current.offsetWidth;
      buttonsRef.current.classList.add("fade-in");
    }
  }, [currentQuestion]);

  const handleButtonClick = (choiceIndex) => {
    setShowingQuestion(false);

    setTimeout(() => {
      setAnswerCounts((prev) => {
        const updated = [...prev];
        updated[choiceIndex]++;
        return updated;
      });

      if (currentQuestion + 1 >= questions.length) {
        setShowResult(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setShowingQuestion(true);
      }
    }, 500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswerCounts(new Array(questions[0].answers.length).fill(0));
    setShowResult(false);
    setShowingQuestion(true);
    onRestart();
  };

  if (showResult) {
    const max = Math.max(...answerCounts);
    const mostChosenIndex = answerCounts.indexOf(max);

    let resultMessage = "";

    if (quizType === "start") {
      if (mostChosenIndex === 0) resultMessage = "Cupcake Cafea Intensă";
      else if (mostChosenIndex === 1) resultMessage = "Tort Ciocolată Amară și Zmeură";
      else if (mostChosenIndex === 2) resultMessage = "Mini Cheesecake";
      else resultMessage = "Cupcake Măr și Scorțișoară";
    }

    return (
      <div className="result">
        <h1 className="question">Rezultatul tău:</h1>
        <h2 className="rezultat">{resultMessage}</h2>

        <div className="actions" style={{ marginTop: "2rem" }}>
          <a href="#" className="button" onClick={resetQuiz}>
            Reia quiz-ul!
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`question-container ${showingQuestion ? "fade-in" : "fade-out"}`}>
        <h1 className="question">{questions[currentQuestion].question}</h1>
      </div>

      <div
        ref={buttonsRef}
        className={`buttons ${showingQuestion ? "fade-in" : "fade-out"}`}
      >
        {questions[currentQuestion].answers.map((answer, index) => (
          <Buttons key={index} choice={answer} onClick={() => handleButtonClick(index)} />
        ))}
      </div>
    </>
  );
}

export default Quiz;
