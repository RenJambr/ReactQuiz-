function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>280</strong> points.
        ({percentage}%)
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
