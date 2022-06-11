import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, img, description, min_quantity, available_quantity, price, _id } = product
  const navigate = useNavigate()

  const productPurchase = (_id) => {
    navigate(`/purchase/${_id}`)
  }
  return (
    <>
      <div class="card shadow-xl image-full">
        <figure><img src={img} alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className="text-yellow-500 font-bold">{description}</p>
          <h3>Available: {available_quantity}</h3>
          <h3>Price: {price}</h3>
          <div class="card-actions flex justify-end">
            <button class="bg-info p-2 rounded-lg hover:bg-yellow-500 hover:text-black" onClick={() => productPurchase(_id)}>View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
