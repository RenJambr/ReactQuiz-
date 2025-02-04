function Option({ option, answer, correctOption, dispatch, index }) {
  const hasAnswered = answer !== null;
  return (
    <button
      className={`btn btn-option ${index === answer ? "answer" : ""} ${
        hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
      }`}
      disabled={hasAnswered}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
    >
      {option}
    </button>
  );
}

export default Option;
