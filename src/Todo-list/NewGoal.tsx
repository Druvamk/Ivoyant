import { useRef, type FormEvent } from "react";
type newGoalProps = {
  handleGoal: (title: string, description: string) => void;
};
function NewGoal({ handleGoal }: newGoalProps) {
  const title = useRef<HTMLInputElement>(null);
  const desc = useRef<HTMLInputElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(title, desc);
    const enteredTitle = title.current?.value;
    const enteredDesc = desc.current?.value;
    event.currentTarget.reset();
    if (!enteredTitle || !enteredDesc) return;
    handleGoal(enteredTitle!, enteredDesc!);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="Enter the Title" ref={title} />
      </div>
      <div>
        <label htmlFor="Description">Description: </label>
        <input type="text" placeholder="Enter the Description" ref={desc} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewGoal;
