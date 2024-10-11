import Footer from "../../Footer/Footer";
import RecentGraphs from "../../graphs/RecentGraphs";
import SalesReport from "../../graphs/SalesGroup";
import GroupGraph from "../../groupGraph/GroupGraph";
import IncomeGropGraph from "../../groupGraph/IncomeGropGraph";

export default function Analytics() {
  return (
    <>
      <div>
        <GroupGraph />
        <IncomeGropGraph />
        <RecentGraphs />
        <SalesReport />
        <Footer />
      </div>
    </>
  );
}
