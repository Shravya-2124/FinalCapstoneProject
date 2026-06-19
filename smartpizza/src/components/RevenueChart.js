import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
 
import { Bar } from "react-chartjs-2";
 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
function RevenueChart() {
  const data = {
    labels: ["Veg Supreme", "Farmhouse", "Chicken Dominator", "Corn Pizza"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 2500, 4000, 1800],
        backgroundColor: [
          "#36A2EB",
          "#4BC0C0",
          "#FF6384",
          "#FFCE56"
        ]
      }
    ]
  };
 
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Bar data={data} />
    </div>
  );
}
 
export default RevenueChart;