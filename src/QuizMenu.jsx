import Buttons from "./Buttons";

function QuizMenu({ onSelectQuiz }) {
  return (
    <div className="quiz-menu">
      {/* Background shapes */}
      <div className="bg-shape bg1"></div>
      <div className="bg-shape bg2"></div>
      <div className="bg-shape bg3"></div>

      {/* Actual content */}
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
