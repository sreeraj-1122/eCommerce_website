import React, { useEffect, useState } from "react";
import axios from "axios";
import { products } from "../../config/basicUrls";
import SingleCard from "../../components/single Card/SingleCard";
import "./product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get(products);
      setAllProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center m-2">Products</h1>
      {loading ? (
        <h4 className="text-center mt-5 text-danger">Loading...</h4>
      ) : (
        <div className="product-section">
          {allProducts.map((value, index) => (
            <Link
              key={value.id}
              to={`/product/${value.id}`}
              className="text-decoration-none"
            >
              <SingleCard
                id={value.id}
                title={value.title}
                images={value.images[0] || value.images[1] || value.images}
                price={value.price}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
