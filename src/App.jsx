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
        question: "Ce îți place să faci în timpul liber?",
        answers: [
          "Să repar lucruri",
          "Să desenez/colorez",
          "Să fac puzzel-uri",
          "Să fac poze sau videoclipuri",
          "Să încerc activități diferite"
        ],
      },
      {
        question: "Cum te-ar descrie prietenii?",
        answers: [
          "Practic și cu mâini dibace",
          "Creativ și atent la detalii",
          "Analitic și răbdător",
          "Comunică ușor și expresiv",
          "Adaptabil, se descurcă peste tot"
        ],
      },
      {
        question: "Ce te atrage mai mult într-un proiect?",
        answers: [
          "Partea fizică și manuală",
          "Partea vizuală și de design",
          "Partea logică",
          "Partea de prezentare și poveste",
          "Să le combin"
        ],
      },
      {
        question: "Cum preferi să lucrezi?",
        answers: [
          "Cu unelte și materiale reale",
          "Cu modele și forme vizuale",
          "La calculator",
          "Cu camere, culori și cadre",
          "Oricum, dacă e interesant și provocator"
        ],
      },
      {
        question: "Care e ora ta preferată?",
        answers: [
          "Fizica și matematica",
          "Arte plastice",
          "Matematică și Informatică",
          "Limba Română și Engleza",
          "Puțin din toate"
        ],
      },
      {
        question: "Ce fel de provocări îți plac?",
        answers: [
          "Cele practice",
          "Cele estetice",
          "Cele logice",
          "Cele de comunicare",
          "Cele diverse"
        ],
      },
      {
        question: "La serbarea de Crăciun, ce poți să faci?",
        answers: [
          "Să construiesc decorațiuni sau structuri",
          "Să modelez, decorez sau creez obiecte vizuale",
          "Să ajut la împărțirea logică a sarcinilor",
          "Să fac afișe și să ajut la organizare",
          "Să ajut la orice e nevoie"
        ],
      },
      {
        question: "Trebuie să strângi fonduri pentru un proiect. Ce ai face?",
        answers: [
          "Organizez un târg sau vând obiecte făcute manual",
          "Creez picturi/desene/obiecte personalizate pentru vânzare",
          "Fac un site unde oamenii pot dona",
          "Fac afișe, videoclipuri și campanii de promovare",
          "Ajut oriunde e nevoie"
        ],
      },
      {
        question: "Cum reacționezi sub presiune?",
        answers: [
          "Rămân calm și rezolv",
          "Găsesc soluții vizuale",
          "Analizez și planific",
          "Comunic și organizez",
          "Mă adaptez"
        ],
      },
      {
        question: "Dacă ai putea alege un rol într-o echipă, unde te vezi?",
        answers: [
          "Lucrând cu mâinile, construind",
          "Creând modele 3D pentru proiecte",
          "Programând ce face robotul",
          "Gestionând media, foto-video, design",
          "Fiind un ajutor peste tot"
        ],
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
            setSelectedQuiz(quizzes[quizName]); 
          }}
        />
      ) : (
        <Quiz questions={selectedQuiz} quizType={quizType} onRestart={resetQuiz} />
      )}
    </div>
  );
}

export default App;
