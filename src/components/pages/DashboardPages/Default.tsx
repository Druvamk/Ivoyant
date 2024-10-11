import Cards from "../../cards/Cards";
import RecentGraphs from "../../graphs/RecentGraphs";
import SalesReport from "../../graphs/SalesGroup";
import UniqueGraph from "../../groupGraph/UniqueGraph";

const Dashboard = () => {
  return (
    <div>
      <h3>Dashboard</h3>
      <Cards />
      <UniqueGraph />
      <RecentGraphs />
      <SalesReport />
    </div>
  );
};

export default Dashboard;
