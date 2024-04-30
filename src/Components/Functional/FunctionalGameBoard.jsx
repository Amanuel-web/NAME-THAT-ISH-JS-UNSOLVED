import "./styles/game-board.css";

import { useState } from "react";

export function FunctionalGameBoard({
  fishData,
  setCorrectCount,
  setIncorrectCount,
}) {
  const [userInput, setUserInput] = useState("");

  const handleAnswer = (answer) => {
    if (answer.toLowerCase() === fishData.name) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setIncorrectCount((prev) => prev + 1);
    }
  };

  const handleScore = (event) => {
    event.preventDefault();
    handleAnswer(userInput);
    setUserInput("");
  };

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
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
