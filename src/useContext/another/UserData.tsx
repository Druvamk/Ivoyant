import ActuallyData from "./ActuallyData";
import UserContext from "./UserContext";

export default function UserData() {
  return (
    <div>
      <UserContext>
        <ActuallyData />
      </UserContext>
    </div>
  );
}
