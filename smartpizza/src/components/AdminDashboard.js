import React, { useEffect, useState } from "react";
import { getDashboard } from "../services/api";
import Navbar from "./Navbar";
import RevenueChart from "./RevenueChart";
import OrdersPieChart from "./OrderPieChart";
 
function AdminDashboard() {
    
    const [dashboard, setDashboard] = useState({
        totalUsers: 0,
        totalPizzas: 0,
        totalOrders: 0,
        totalRevenue: 0
    });
    const [topPizza]=useState("Veg Supreme");
    const[customerStats] = useState({
        totalCustomers:6,
        newCustomers:2,
        repeatCustomers:4
    });
    const [recommendedPizzas] = useState([
        "Veg Supreme",
        "Farmhouse",
        "Chicken Dominator"
    ]);
    useEffect(() => {
        loadDashboard();
    }, []);
 
    const loadDashboard = async () => {
        try {
            const response = await getDashboard();
            console.log("Dashboard Data:" ,response.data);
            setDashboard(response.data);
        } catch (error) {
            console.error(error);
        }
    };
 
    return (
        <div className="container mt-4">
 
            <Navbar />
 
            {/* <h2 className="text-center mb-4">
                SmartPizzaAI Dashboard
            </h2> */}
 
            <div className="row">
 
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Total Users</h5>
                            <h2>{dashboard.totalUsers}</h2>
                        </div>
                    </div>
                </div>
 
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Total Pizzas</h5>
                            <h2>{dashboard.totalPizzas}</h2>
                        </div>
                    </div>
                </div>
 
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Total Orders</h5>
                            <h2>{dashboard.totalOrders}</h2>
                        </div>
                    </div>
                </div>
 
                <div className="col-md-3">
                    <div className="card text-center shadow">
                        <div className="card-body">
                            <h5>Revenue</h5>
                            <h2>₹ {dashboard.totalRevenue}</h2>
                        </div>
                    </div>
                </div>

        <div className="row mt-4">
 
  <div className="col-md-12">
 
    <div className="card shadow">
 
      <div className="card-body text-center">
 
        <h4>Top Selling Pizza</h4>
 
        <h2 className="text-success">
          {topPizza}
        </h2>
 
      </div>
 
    </div>
 
  </div>

  <div className="row mt-4">
 
  <div className="col-md-4">
    <div className="card shadow text-center">
      <div className="card-body">
        <h5>Total Customers</h5>
        <h2>{customerStats.totalCustomers}</h2>
      </div>
    </div>
  </div>
 
  <div className="col-md-4">
    <div className="card shadow text-center">
      <div className="card-body">
        <h5>New Customers</h5>
        <h2 className="text-primary">
          {customerStats.newCustomers}
        </h2>
      </div>
    </div>
  </div>
 
  <div className="col-md-4">
    <div className="card shadow text-center">
      <div className="card-body">
        <h5>Repeat Customers</h5>
        <h2 className="text-success">
          {customerStats.repeatCustomers}
        </h2>
      </div>
    </div>
  </div>
 
 <div className="row mt-4">
  <div className="col-md-12">
    <div className="card shadow">
      <div className="card-body text-center">
 
        <h3>Recommended Pizzas</h3>
 
        <div className="row mt-4">
 
          {recommendedPizzas.map((pizza, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-success">
                <div className="card-body">
                  <h5>{pizza}</h5>
                </div>
              </div>
            </div>
          ))}
 
        </div>
 <h3 style={{marginTop:"30px"}}>
 Revenue Analytics
</h3>
 
<RevenueChart />
 
<h3 style={{marginTop:"30px"}}>
 Order Categories
</h3>
 
<OrdersPieChart />
 
      </div>
    </div>
  </div>
</div>
</div>
 
</div>
 </div>
 </div>

    );
}
 
export default AdminDashboard;