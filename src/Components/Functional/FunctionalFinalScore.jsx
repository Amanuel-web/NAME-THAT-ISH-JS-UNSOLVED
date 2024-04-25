import "./styles/final-score.css";
const totalCount = 4;
export const FunctionalFinalScore = ({ correctCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
