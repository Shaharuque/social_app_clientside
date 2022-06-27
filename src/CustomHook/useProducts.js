//by calling this we can get all the products information

import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(" https://quiet-sea-27806.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products,setProducts]
};

export default useProducts;
