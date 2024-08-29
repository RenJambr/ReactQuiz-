function NextBtn({ dispatch, index, numQuestions, answer }) {
  if (answer === null) return;
  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        index === numQuestions - 1
          ? dispatch({ type: "finish" })
          : dispatch({ type: "nextQuestion", payload: index + 1 })
      }
    >
      {index === numQuestions - 1 ? "Finish" : "Next"}
    </button>
  );
}

export default NextBtn;
