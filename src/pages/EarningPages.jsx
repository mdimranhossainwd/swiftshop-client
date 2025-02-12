import Chart from "react-google-charts";
import Heading from "../shared/Heading";

const EarningPages = () => {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  const options = {
    title: "Earnings Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <>
      <Heading heading="Earning Overview" />
      <div className="px-6 mt-8">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </>
  );
};

export default EarningPages;
