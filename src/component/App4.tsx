import Private from "./Private";
import Profile from "./Profile";

export default function App4() {
  return (
    <div>
      <Private isLogged={true} Component={Profile} />
    </div>
  );
}
