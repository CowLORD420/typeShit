import Buttons from "./Buttons";

function QuizMenu({ onSelectQuiz }) {
  return (
    <div className="quiz-menu">
      <div class="bg-shape bg1"></div>
      <div class="bg-shape bg2"></div>
      <div class="bg-shape bg3"></div>
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
