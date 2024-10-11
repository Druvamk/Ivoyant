import FooterCards from "../../cards/FooterCards";
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
        <FooterCards />
      </div>
    </>
  );
}
