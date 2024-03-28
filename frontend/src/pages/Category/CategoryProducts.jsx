import React, { useEffect, useState } from "react";
import { categories } from "../../config/basicUrls";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SingleCard from "../../components/single Card/SingleCard";

const CategoryProducts = () => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const categoryId = parseInt(id);

  useEffect(() => {
    getData();
  }, [categoryId]);

  const getData = async () => {
    try {
      const response = await axios.get(`${categories}/${categoryId}/products`);
      setCategoryProducts(response.data);
      console.log(response.data);
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
          {categoryProducts.map((value, index) => (
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

export default CategoryProducts;
