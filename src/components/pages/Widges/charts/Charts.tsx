import { Breadcrumb } from "antd";
import Title from "antd/es/typography/Title";
import FourGraph from "../../../groupGraph/FourGraph";
import { IncomeContainer } from "../../../../cardsStyledComponents/Container.styled";
import IncomeGropGraph from "../../../groupGraph/IncomeGropGraph";
import UniqueGraph from "../../../groupGraph/UniqueGraph";

export default function Charts() {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Charts",
          },
        ]}
        params={{ id: 1 }}
        style={{ fontSize: "18px" }}
      />
      <Title>Chart</Title>
      <FourGraph />
      <UniqueGraph />
    </div>
  );
}
