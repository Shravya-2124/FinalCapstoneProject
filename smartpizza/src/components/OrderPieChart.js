import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
 
import { Pie } from "react-chartjs-2";
 
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
 
function OrdersPieChart() {
 
  const data = {
    labels: ["Veg", "Non Veg", "Premium"],
    datasets: [
      {
        data: [15, 10, 4],
        backgroundColor: [
          "#4BC0C0",
          "#FF6384",
          "#FFCE56"
        ]
      }
    ]
  };
 
  return (
    <div style={{ width: "350px", margin: "auto" }}>
      <Pie data={data} />
    </div>
  );
}
 
export default OrdersPieChart;