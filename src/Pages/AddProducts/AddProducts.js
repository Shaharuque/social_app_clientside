import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';
import {MdOutlineInventory} from 'react-icons/md'

const AddProducts = () => {
  const [user] = useAuthState(auth)
  const handleAddProduct = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const min_quantity = e.target.minimum_quantity.value;
    const available_quantity = e.target.available_quantity.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const supplier = e.target.supplier.value;
    const img = e.target.img.value;
    const email = user?.email;
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
    fetch("https://desolate-bastion-01704.herokuapp.com/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("PRODUCT ADDED SUCCESSFULLY");
        //form ta k reset korbey
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ marginBottom: "80px" }}>
      <div className='bg-yellow-500 rounded-lg shadow-lg'>
        <h4 className='mt-12 mb-8 flex items-center justify-center text-white font-bold'>ADD NEW ITEM <MdOutlineInventory className="mx-2" /></h4>
      </div>
      <form className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4"
        onSubmit={handleAddProduct}
      >
        <input type="text" name="name" placeholder="Name" className=" input input-bordered input-warning w-full  mb-3" required />
        <input type="text" name="img" placeholder="Image URL" className="input input-bordered input-warning  w-full mb-3" required />
        <input type="text" name="description" placeholder="Description" className="input input-bordered input-warning  w-full  mb-3" required />
        <input type="number" name="minimum_quantity" placeholder="Minimum Quantity" className="input input-bordered input-warning  w-full  mb-3" required />
        <input type="number" name="available_quantity" placeholder="Available Quantity" className="input input-bordered input-warning  w-full  mb-3" required />
        <input type="number" name="price" placeholder="Price(per unit)" className="input input-bordered input-warning  w-full  mb-3" required />
        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered input-warning  w-full  mb-3" required />
        <input type="text" value={user?.email} placeholder="Email" className="input input-bordered input-warning  w-full  mb-3" />
        <input type="submit" value="Submit" class="text-white btn btn-warning w-full shadow-lg  hover:bg-black hover:border-black" />
      </form>
    </div>
  );
};

export default AddProducts;
