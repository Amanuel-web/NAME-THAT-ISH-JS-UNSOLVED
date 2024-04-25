import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    answersLeft: initialFishes.map((fish) => fish.name),
    finalScoreVisible: false,
    gameBoardVisible: true,
  };

  checkGameEnd = () => {
    if (this.state.answersLeft.length === 0) {
      this.setState({ finalScoreVisible: true, gameBoardVisible: false });
    }
  };

  render() {
    return (
      <>
        <>
          <ClassScoreBoard
            correctCount={this.state.correctCount}
            incorrectCount={this.state.incorrectCount}
            answersLeft={this.state.answersLeft}
          />

          {this.state.gameBoardVisible && (
            <ClassGameBoard
              initialFishes={initialFishes}
              setCorrectCount={(inc) =>
                this.setState((prev) => ({
                  correctCount: prev.correctCount + inc,
                }))
              }
              setIncorrectCount={(inc) =>
                this.setState((prev) => ({
                  incorrectCount: prev.incorrectCount + inc,
                }))
              }
              setAnswersLeft={(newAnswers) =>
                this.setState({ answersLeft: newAnswers })
              }
              answersLeft={this.state.answersLeft}
              checkGameEnd={this.checkGameEnd}
            />
          )}
          {this.state.finalScoreVisible && (
            <ClassFinalScore
              correctCount={this.state.correctCount}
              totalCount={initialFishes.length}
            />
          )}
        </>
      </>
    );
  }
}
