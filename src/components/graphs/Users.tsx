import Chart from "react-apexcharts";

export default function Users() {
  return (
    <div>
      <Chart
        type="bar"
        width={300}
        height={150}
        series={[
          {
            name: "Sales",
            data: [
              100, 90, 80, 90, 80, 80, 90, 100, 80, 70, 80, 70, 80, 90, 70, 90,
              80, 90,
            ],
            color: "#024CAA",
          },
        ]}
        options={{
          chart: { id: "basic-bar" },
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
        }}
      />
    </div>
  );
}
