import Buttons from "./Buttons";

function QuizMenu({ onSelectQuiz }) {
  return (
    <div className="quiz-menu">
      <h1 className="question">Isdjfkgusagfdyusgfuyfgsdihf iudsfgsdgf8y</h1>
      <div className="buttons single-quiz">
        <Buttons
          choice="Afla ce surub esti!"
          onClick={() => onSelectQuiz("start")}
          className="irresistible"
        />
      </div>
    </div>
  );
}

export default QuizMenu;
