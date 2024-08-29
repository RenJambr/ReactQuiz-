function Progress({ index, numQuestions, points, maxPoints, answer }) {
  return (
    <div className="progress">
      <progress value={index + Number(answer !== null)} max={15} />
      <p>
        Question {index + 1} / {numQuestions}
      </p>
      <p>
        {points} / {maxPoints} points
      </p>
    </div>
  );
}

export default Progress;
