import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
    const {name,img,description,min_quantity,available_quantity,price,_id}=product
    const navigate=useNavigate()

    const productPurchase=(_id)=>{
      navigate(`/purchase/${_id}`)
    }
  return (
    <>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img}
            alt="car-part"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{description}</p>
          <h3 style={{fontWeight:'600'}}>Minimum Quantity to order: {min_quantity}</h3>
          <h3 style={{fontWeight:'600',color:'green'}}>Available: {available_quantity}</h3>
          <h3 style={{fontWeight:'600',color:'teal'}}>Price: {price}</h3>
          <div class="card-actions">
            <button class="btn btn-primary" onClick={()=>productPurchase(_id)}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
