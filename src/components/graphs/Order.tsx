import Chart from "react-apexcharts";

export default function Order() {
  return (
    <Chart
      type="line" 
      width={300}
      height={130}
      series={[
        {
          name: "Sales",
          data: [
            1800, 1500, 1800, 1700, 1400, 1200, 1000, 800, 600, 500, 600, 800,
            500, 700, 400, 600, 500, 600,
          ],
          color: "#D91656",
        },
      ]}
      options={{
        chart: { id: "basic-line" }, 
        xaxis: {
          categories: [
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
            "users",
          ],
          labels: {
            show: false, 
          },
        },
        dataLabels: {
          enabled: false, 
        },
        stroke: {
          curve: "smooth", 
          width: 5, 
        },
      }}
    />
  );
}
