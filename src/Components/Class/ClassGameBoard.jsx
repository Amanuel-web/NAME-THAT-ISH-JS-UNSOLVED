import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    userInput: "",
    currentFishIndex: 0,
  };

  handleScore = (event) => {
    event.preventDefault();
    const {
      initialFishes,
      setCorrectCount,
      setIncorrectCount,
      setAnswersLeft,
      answersLeft,
      checkGameEnd,
    } = this.props;
    const { currentFishIndex, userInput } = this.state;
    const currentFish = initialFishes[currentFishIndex];

    if (userInput.toLowerCase() === currentFish.name) {
      setCorrectCount(1);
    } else {
      setIncorrectCount(1);
    }

    const newAnswers = answersLeft.filter((name) => name !== currentFish.name);
    setAnswersLeft(newAnswers);

    this.setState(
      {
        userInput: "",
        currentFishIndex: (currentFishIndex + 1) % initialFishes.length,
      },
      () => checkGameEnd()
    );
  };

  render() {
    const { initialFishes } = this.props;
    const { currentFishIndex } = this.state;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={initialFishes[currentFishIndex].url}
            alt={initialFishes[currentFishIndex].name}
          />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleScore}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.userInput}
            onChange={(e) => this.setState({ userInput: e.target.value })}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
