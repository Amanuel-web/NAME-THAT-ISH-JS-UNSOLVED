import "./styles/game-board.css";

import { useState } from "react";

export function FunctionalGameBoard({
  initialFishes,
  setCorrectCount,
  setIncorrectCount,
  setAnswersLeft,
  checkGameEnd,
}) {
  const [userInput, setUserInput] = useState("");
  const [currentFishIndex, setCurrentFishIndex] = useState(0);

  const handleScore = (event) => {
    event.preventDefault();
    const currentFish = initialFishes[currentFishIndex];
    if (userInput.toLowerCase() === currentFish.name) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
    setCurrentFishIndex((prev) => (prev + 1) % initialFishes.length);
    setAnswersLeft((prev) => prev.filter((name) => name !== currentFish.name));
    checkGameEnd();
    setUserInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img
          src={initialFishes[currentFishIndex].url}
          alt={initialFishes[currentFishIndex].name}
        />
      </div>
      <form id="fish-guess-form" onSubmit={handleScore}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
