import { useState } from "react";
import CourseGoalList from "./CourseGoalList";
import NewGoal from "./NewGoal";
import InfoBox from "./InfoBox";
export type goalsProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<goalsProps[]>([]);

  function handleGoal(title: string, description: string) {
    const newGoal: goalsProps = {
      title,
      description,
      id: Math.random() * 100,
    };
    setGoals((prev) => [...prev, newGoal]);
  }

  function handleDelete(id: number) {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  }
  if (goals.length >= 5) {
    return (
      <>
        <NewGoal handleGoal={handleGoal} />
        <InfoBox mode="warning">
          <p>You have reached the maximum number of goals</p>
        </InfoBox>
        <ul>
          <CourseGoalList goals={goals} handleDelete={handleDelete} />
        </ul>
      </>
    );
  }
  return (
    <>
      <div>
        <NewGoal handleGoal={handleGoal} />
        <ul>
          <CourseGoalList goals={goals} handleDelete={handleDelete} />
        </ul>
      </div>
    </>
  );
}

export default App;
