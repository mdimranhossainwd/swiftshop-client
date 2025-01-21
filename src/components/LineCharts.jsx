import Chart from "react-google-charts";

const LineCharts = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales and Expenses over the Years",
    },
  };

  return (
    <>
      <Chart
        chartType="Line"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};

export default LineCharts;
