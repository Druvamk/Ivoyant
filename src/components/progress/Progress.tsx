export default function Progress({
  index,
  numQuestion,
  points,
  maxPossible,
  answer,
}: {
  index: number;
  numQuestion: number;
  points: number;
  maxPossible: number;
  answer: number;
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestion}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossible}
      </p>
    </header>
  );
}
