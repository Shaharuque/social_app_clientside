import React from "react";
import styled from "styled-components";

const AddProducts = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const min_quantity = e.target.minimum_quantity.value;
    const available_quantity = e.target.available_quantity.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const supplier = e.target.supplier.value;
    const img = e.target.img.value;
    const email = e.target.email.value;
    const product = {
      name,
      min_quantity,
      available_quantity,
      description,
      price,
      img,
      email,
      supplier,
    };
    //console.log(product);

    //sending product to DB through API
    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("PRODUCT ADDED SUCCESSFULLY");
        //form ta k reset korbey
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginBottom: "80px" }}>
      <h4
        style={{
          fontFamily: "fantasy",
          textAlign: "center",
          marginTop: "10px",
          color: "teal",
        }}
      >
        ADD INVENTORY ITEMS
      </h4>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
        onSubmit={handleAddProduct}
      >
       <input type="text" name="name" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs mb-3" required />
       <input type="text" name="img" placeholder="Image URL" className="input input-bordered input-primary w-full max-w-xs mb-3" required/>
       <input type="text" name="description" placeholder="Description" className="input input-bordered input-primary w-full max-w-xs mb-3" required/>
       <input type="number" name="minimum_quantity" placeholder="Minimum Quantity" className="input input-bordered input-primary w-full max-w-xs mb-3" required/>
       <input type="number" name="available_quantity" placeholder="Available Quantity" className="input input-bordered input-primary w-full max-w-xs mb-3" required/>
       <input type="number" name="price" placeholder="Price(per unit)" className="input input-bordered input-primary w-full max-w-xs mb-3" required/>
       <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered input-primary w-full max-w-xs mb-3" required/>
       <input type="text" name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs mb-3" />
       <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs text-white" />
      </form>
    </div>
  );
};

export default AddProducts;
