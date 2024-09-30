import CourseGoal from "./CourseGoal";
import { goalsProps as goals } from "./App";
type goalsProps = {
  goals: goals[];
  handleDelete: (id: number) => void;
};

export default function CourseGoalList({ goals, handleDelete }: goalsProps) {
  return (
    <li>
      {goals.map((goal) => (
        <CourseGoal
          key={goal.id}
          title={goal.title}
          description={goal.description}
          id={goal.id}
          handleDelete={handleDelete}
        />
      ))}
    </li>
  );
}
