import { ReactComponentElement } from "react";

export interface DataPointProps {
  month: string;
  value: number;
}
export interface marketDataProps {
  market: string;
  value: number;
}
export type incomeProps = {
  week: string;
  value: number;
};
export type VerticalconfigProps = {
  data: DataPointProps[];
  xField: string;
  yField: string;
  smooth: boolean;
  color: string;
  meta: {
    month: {
      alias: string;
    };
    value: {
      alias: string;
    };
  };
};
export type marketconfigProps = {
  data: marketDataProps[];
  xField: string;
  yField: string;
  smooth: boolean;
  color: string;
  meta: {
    month: {
      alias: string;
    };
    value: {
      alias: string;
    };
  };
};

export type incomeconfigProps = {
  data: incomeProps[];
  xField: string;
  yField: string;
  smooth: boolean;
  color: string;
  meta: {
    week: {
      alias: string;
    };
    value: {
      alias: string;
    };
  };
};
export type checkBoxdataProps = {
  title: string;
  completed: boolean;
};
export type datacardRow1Props = {
  title: string;
  percentage: number;
  color: string;
};
export type teamProps = {
  rol: string;
  time: string;
  src: string;
};
export type teamMemberDataProps = {
  time: string;
  src: string;
  follwers: string;
  desc: string;
};
export type userActivityDataProps = {
  time: string;
  src: string;
};
export interface DataType {
  key: React.Key;
  // assigned: React.ComponentType;
  name: string;
  dueDate: string;
  priority: string;
}
