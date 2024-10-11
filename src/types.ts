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
