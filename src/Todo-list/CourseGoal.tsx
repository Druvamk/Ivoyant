import { type FC } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
  handleDelete: (id: number) => void;
};
const CourseGoal: FC<CourseGoalProps> = ({
  title,
  description,
  id,
  handleDelete,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};
export default CourseGoal;
