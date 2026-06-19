import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function AdminPizza() {
 
    const [pizzas, setPizzas] = useState([]);
 
    const [editingId, setEditingId] = useState(null);
    const navigate=useNavigate();

    // Add Pizza States
    const [newPizzaName, setNewPizzaName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newCategory, setNewCategory] = useState("");
 
    // Edit Pizza States
    const [pizzaName, setPizzaName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [available, setAvailable] = useState(true);
 
    useEffect(() => {
        loadPizzas();
    }, []);
 
    const loadPizzas = async () => {
   
        try {
            const response = await axios.get(
                "http://localhost:8080/pizzas"
            );
 
            setPizzas(response.data);
 
        } catch (error) {
            console.error(error);
            alert("Unable to load pizzas");
        }
    };
 
    // ADD PIZZA
    const addPizza = async () => {
      if (!pizzaName.trim()) {
    alert("Pizza name is required");
    return;
}
 
if (!description.trim()) {
    alert("Description is required");
    return;
}
 
if (!price) {
    alert("Price is required");
    return;
}
 
if (price <= 0) {
    alert("Price must be greater than 0");
    return;
}
 
if (!category.trim()) {
    alert("Category is required");
    return;
}
        try {
 
            const pizza = {
                pizzaName: newPizzaName,
                description: newDescription,
                price: Number(newPrice),
                category: newCategory,
                available: true
            };
 
            await axios.post(
                "http://localhost:8080/pizzas",
                pizza
            );
 
            alert("Pizza Added Successfully");
 
            setNewPizzaName("");
            setNewDescription("");
            setNewPrice("");
            setNewCategory("");

            loadPizzas();
 
        } catch (error) {
 
            console.error(error);
            alert("Failed to Add Pizza");
        }
    };
 
    // EDIT PIZZA
    const editPizza = (pizza) => {
 
        setEditingId(pizza.pizzaId);
        setPizzaName(pizza.pizzaName);
        setDescription(pizza.description);
        setPrice(pizza.price);
        setCategory(pizza.category);
        setAvailable(pizza.available);
    };
 
    // UPDATE PIZZA
    const updatePizza = async () => {
 
        try {
 
            const updatedPizza = {
                pizzaName,
                description,
                price: Number(price),
                category,
                available
            };
 
            await axios.put(
                `http://localhost:8080/pizzas/${editingId}`,
                updatedPizza
            );
 
            alert("Pizza Updated Successfully");
 
            setEditingId(null);
            setPizzaName("");
            setDescription("");
            setPrice("");
            setCategory("");
            setAvailable(true);
 
            loadPizzas();
 
        } catch (error) {
 
            console.error(error);
            alert("Failed to update pizza");
        }
    };
 
    // DELETE PIZZA
    const deletePizza = async (id) => {
 
        try {
 
            await axios.delete(
                `http://localhost:8080/pizzas/${id}`
            );
 
            alert("Pizza Deleted Successfully");
 
            loadPizzas();
 
        } catch (error) {
 
            console.error(error);
            alert("Failed to delete pizza");
        }
    };
 
    return (
        <div className="container mt-4">
            
            <h2 className="text-center mb-4">
                Admin Pizza Management
            </h2>
  <Navbar/>
  <div className="mb-3">
  <button className="btn btn-primary" onClick={() => navigate("/admin-orders")}>Manage Orders</button>
            {/* ADD PIZZA */}
 </div>
            <div className="card p-3 mb-4">
 
                <h4>Add New Pizza</h4>
 
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Pizza Name"
                    value={newPizzaName}
                    onChange={(e) =>
                        setNewPizzaName(e.target.value)
                    }
                />
 
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Description"
                    value={newDescription}
                    onChange={(e) =>
                        setNewDescription(e.target.value)
                    }
                />
 
                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Price"
                    value={newPrice}
                    onChange={(e) =>
                        setNewPrice(e.target.value)
                    }
                />
 
                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Category"
                    value={newCategory}
                    onChange={(e) =>
                        setNewCategory(e.target.value)
                    }
                />
 
                <button
                    className="btn btn-success"
                    onClick={addPizza}
                >
                    Add Pizza
                </button>
 
            </div>
 
            {/* EDIT PIZZA */}
 
            {editingId && (
 
                <div className="card p-3 mb-4">
 
                    <h4>Edit Pizza</h4>
 
                    <input
                        type="text"
                        className="form-control mb-2"
                        value={pizzaName}
                        onChange={(e) =>
                            setPizzaName(e.target.value)
                        }
                    />
 
                    <input
                        type="text"
                        className="form-control mb-2"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                    />
 
                    <input
                        type="number"
                        className="form-control mb-2"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                    />
 
                    <input
                        type="text"
                        className="form-control mb-2"
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                    />
 
                    <button
                        className="btn btn-primary"
                        onClick={updatePizza}
                    >
                        Update Pizza
                    </button>
 
                </div>
 
            )}
 
            <table className="table table-bordered table-striped">
 
                <thead className="table-dark">
 
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Available</th>
                        <th>Action</th>
                    </tr>
 
                </thead>
 
                <tbody>
 
                    {pizzas.length > 0 ? (
 
                        pizzas.map((pizza) => (
 
                            <tr key={pizza.pizzaId}>
 
                                <td>{pizza.pizzaId}</td>
                                <td>{pizza.pizzaName}</td>
                                <td>₹ {pizza.price}</td>
                                <td>{pizza.category}</td>
                                <td>
                                    {pizza.available ? "Yes" : "No"}
                                </td>
 
                                <td>
 
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() =>
                                            editPizza(pizza)
                                        }
                                    >
                                        Edit
                                    </button>
 
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            deletePizza(pizza.pizzaId)
                                        }
                                    >
                                        Delete
                                    </button>
 
                                </td>
 
                            </tr>
 
                        ))
 
                    ) : (
 
                        <tr>
                            <td
                                colSpan="6"
                                className="text-center"
                            >
                                No Pizzas Found
                            </td>
                        </tr>
 
                    )}
 
                </tbody>
 
            </table>
 
        </div>
    );
}
 
export default AdminPizza;