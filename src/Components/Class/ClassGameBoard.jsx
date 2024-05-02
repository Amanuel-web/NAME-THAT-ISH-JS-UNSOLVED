import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    userInput: "",
  };

  handleAnswer = (answer) => {
    const { fishData, handleStateChanges } = this.props;
    const propName =
      answer.toLowerCase() === fishData.name
        ? "correctCount"
        : "incorrectCount";
    handleStateChanges(propName);
  };

  handleScore = (event) => {
    event.preventDefault();
    this.handleAnswer(this.state.userInput);
    this.setState({
      userInput: "",
    });
  };

  render() {
    const { fishData } = this.props;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
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
