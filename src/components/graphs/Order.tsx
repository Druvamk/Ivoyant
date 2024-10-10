import Chart from "react-apexcharts";

export default function Order() {
  return (
    <Chart
      type="line" // Change type to "line"
      width={300}
      height={200}
      series={[
        {
          name: "Sales",
          data: [
            1800, 1500, 1800, 1700, 1400, 1200, 1000, 800, 600, 500, 600, 800,
            500, 700, 400, 600, 500, 600,
          ],
          color: "#D91656", // This color will be applied to the line
        },
      ]}
      options={{
        chart: { id: "basic-line" }, // Updated the chart id to reflect the change
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
            show: false, // Keep labels hidden if desired
          },
        },
        dataLabels: {
          enabled: false, // Keep data labels disabled
        },
        stroke: {
          curve: "smooth", // Makes the line smooth
          width: 5, // Line thickness
        },
      }}
    />
  );
}
