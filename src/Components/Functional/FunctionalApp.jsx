import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(
    initialFishes.map((fish) => fish.name)
  );
  const [finalScoreVisible, setFinalScoreVisible] = useState(false);
  const [gameBoardVisible, setGameBoardVisible] = useState(true);

  const checkGameEnd = () => {
    if (answersLeft.length - 1 === 0) {
      setFinalScoreVisible(true);
      setGameBoardVisible(false);
    }
  };

  return (
    <>
      <FunctionalScoreBoard
        correctCount={correctCount}
        incorrectCount={incorrectCount}
        answersLeft={answersLeft}
      />
      {gameBoardVisible && (
        <FunctionalGameBoard
          initialFishes={initialFishes}
          setCorrectCount={setCorrectCount}
          setIncorrectCount={setIncorrectCount}
          setAnswersLeft={setAnswersLeft}
          checkGameEnd={checkGameEnd}
        />
      )}

      {finalScoreVisible && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
