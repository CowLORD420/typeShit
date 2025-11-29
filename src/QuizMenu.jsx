import Buttons from "./Buttons";

function QuizMenu({ onSelectQuiz }) {
  return (
    <div className="quiz-menu">
      <div className="bg-shape bg1">
  <div className="bg-shape bg2">
    <div className="bg-shape bg3">
      <div className="buttons single-quiz">
        <Buttons
          choice="Afla ce surub esti!"
          onClick={() => onSelectQuiz("start")}
          className="irresistible"
        />
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default QuizMenu;
