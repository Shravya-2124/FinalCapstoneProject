import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import pizzaImages from "./pizzaImages";
 
function PizzaList() {
 
    const [pizzas, setPizzas] = useState([]);
    const [search,setSearch] = useState("");
    const[category,setCategory] = useState("ALL");
    useEffect(() => {
        fetchPizzas();
    }, []);
 
    const fetchPizzas = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/pizzas"
            );
 
            setPizzas(response.data);
 
        } catch (error) {
            console.log(error);
            alert("Failed to load pizzas");
        }
    };
 
    const addToCart = async (pizzaId) => {
        try {
 
            const userId = localStorage.getItem("userId");
            console.log("User ID:",userId);
 
            await axios.post(
                "http://localhost:8080/cart/add",
                {
                    userId: Number(userId),
                    pizzaId: pizzaId,
                    quantity: 1
                }
            );
 
            alert("Pizza Added To Cart");
 
        } catch (error) {
            console.log(error);

            if(error.response){
                console.log(error.response.data);
            }
            alert("Failed To Add Pizza");
        }
    };
 
    return (
       
      
        // <div className="container mt-4">
        //     <h1 className="text-center mb-4">Pizza Menu</h1>
        <div
  className="text-center mb-4"
>
  <i className="display-6 fw-bold">Welcome to SmartPizza AI</i>
 
  <p className="lead text-muted">
    Order Delicious Pizzas Online
  </p>

                <Navbar/>
                <div className="row mb-4">
 
    <div className="col-md-6">
        <input
            type="text"
            className="form-control"
            placeholder="Search Pizza..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
 
    <div className="col-md-6 text-end">
 
        <button
            className={`btn me-2 ${
                category === "ALL"
                    ? "btn-dark"
                    : "btn-outline-dark"
            }`}
            onClick={() => setCategory("ALL")}
        >
            All
        </button>
 
        <button
            className={`btn me-2 ${
                category === "VEG"
                    ? "btn-success"
                    : "btn-outline-success"
            }`}
            onClick={() => setCategory("VEG")}
        >
            Veg
        </button>
 
        <button
            className={`btn me-2 ${
                category === "NON_VEG"
                    ? "btn-danger"
                    : "btn-outline-danger"
            }`}
            onClick={() => setCategory("NON_VEG")}
        >
            Non Veg
        </button>
 
        <button
            className={`btn ${
                category === "PREMIUM"
                    ? "btn-warning"
                    : "btn-outline-warning"
            }`}
            onClick={() => setCategory("PREMIUM")}
        >
            Premium
        </button>
 
    </div>
 
</div>
            {/* <div className="row"> */}
 {/* <div className="text-end mb-3">
            <button className="btn btn-success" onClick={() => window.location.href="/cart"}>
                View Cart</button></div> */}
 
{/* <input
    type="text"
    className="form-control mb-3"
    placeholder="Search Pizza..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/> */}
 
<div className="row">
                {/* {pizzas.map((pizza) => ( */}
                {
pizzas
.filter((pizza) => {
 
    const matchesSearch =
        pizza.pizzaName
            .toLowerCase()
            .includes(search.toLowerCase());
 
    const matchesCategory =
        category === "ALL" ||
        pizza.category === category;
 
    return matchesSearch && matchesCategory;
})
.map((pizza) => (
                    <div className="col-lg-3 col-md-6 mb-4" key={pizza.pizzaId}>
                        {/* <div className="card shadow border-0 h-100"> */}
<div className="card h-100 pizza-card shadow-sm">
 
    <img
      src={pizzaImages[pizza.pizzaName]}
      className="card-img-top"
      alt={pizza.pizzaName}
      style={{ height: "180px", objectFit: "cover" }}
    />

                            <div className="card-body">
 
                                <h5 className="card-title">
                                    {pizza.pizzaName}
                                </h5>
                                <div className="mb-2">
 
{
pizza.category === "VEG" ?
 
<span className="badge bg-success">
    VEG
</span>
 
:
 
pizza.category === "NON_VEG" ?
 
<span className="badge bg-danger">
    NON VEG
</span>
 
:
 
<span className="badge bg-warning text-dark">
    PREMIUM
</span>
 
}
 
</div>
 
                                <p className="card-text">
                                    {pizza.description}
                                </p>
 
                                <h4 className="text-success fw-bold">₹ {pizza.price}</h4>
 
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => addToCart(pizza.pizzaId)}
                                >
                                    Add To Cart
                                </button>
 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
 
        </div>
    );
}
 
export default PizzaList;