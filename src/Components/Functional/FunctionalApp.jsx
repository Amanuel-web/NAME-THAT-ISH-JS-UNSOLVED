import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { initialFishes } from "../constants/fishData";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;

  const isGameOver = fishIndex >= initialFishes.length;
  const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

  return (
    <>
      {!isGameOver && (
        <>
          <FunctionalScoreBoard
            correctCount={correctCount}
            incorrectCount={incorrectCount}
            answersLeft={answersLeft}
          />

          <FunctionalGameBoard
            fishData={initialFishes[fishIndex]}
            setCorrectCount={setCorrectCount}
            setIncorrectCount={setIncorrectCount}
          />
        </>
      )}
      {isGameOver && (
        <FunctionalFinalScore
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
