import Buttons from "./Buttons";

function QuizMenu({ onSelectQuiz }) {
  return (
    <div className="quiz-menu">
      <h1 className="EpsilonText">Epsilon #21044</h1>
      <img src="/Epsilon.png" className="Robot"></img>
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
