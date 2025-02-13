import Chart from "react-google-charts";

const Profile = () => {
  const data = [
    ["Activity", "Active", "Products"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  const options = {
    title: "Dashboard Overview",
    curveType: "function",
    legend: { position: "bottom" },
  };
  return (
    <div className="px-6 mt-8">
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Profile;
