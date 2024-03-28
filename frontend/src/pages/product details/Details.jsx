import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { products } from "../../config/basicUrls";
import "./details.css";

function Details() {
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  const { id } = useParams();
  const userid = parseInt(id);

  useEffect(() => {
    getSingleProduct();
  }, [userid]);

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(`${products}/${userid}`);
      setSingleProduct(response.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-display">
      {loading ? (
        <h4 className="text-danger">Loading...</h4> // Display loading message while data is being fetched
      ) : (
        singleProduct && (
          <>
            <div className="product-display-left">
              <div className="product-display-main-img">
                {singleProduct.images && singleProduct.images.length > 0 && (
                  <img src={singleProduct.images[0]} alt="" />
                )}
              </div>
            </div>
            <div className="product-display-right">
              {singleProduct.category && (
                <p>{singleProduct.category.name}</p>
              )}
              <h1>{singleProduct.title}</h1>
              <div className="product-display-right-prices">
                <div className="product-display-right-price-new">
                  ₹ {singleProduct.price}
                </div>
              </div>
              <div className="product-display-right-description">
                {singleProduct.description}
              </div>
             
              <button onClick={()=>alert('Added to cart')}>ADD TO CART</button>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Details;
