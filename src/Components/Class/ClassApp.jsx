import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../constants/fishData";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
  };
  handleStateChanges = (propName) => {
    this.setState((prevState) => ({
      [propName]: prevState[propName] + 1,
    }));
  };

  render() {
    const fishIndex = this.state.correctCount + this.state.incorrectCount;

    const isGameOver = fishIndex >= initialFishes.length;
    const answersLeft = initialFishes.map((fish) => fish.name).slice(fishIndex);

    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              correctCount={this.state.correctCount}
              incorrectCount={this.state.incorrectCount}
              answersLeft={answersLeft}
            />

            <ClassGameBoard
              fishData={initialFishes[fishIndex]}
              handleStateChanges={this.handleStateChanges}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore
            correctCount={this.state.correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
