import Option from "./Option";

function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <Option
            option={option}
            answer={answer}
            key={option}
            correctOption={question.correctOption}
            dispatch={dispatch}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
