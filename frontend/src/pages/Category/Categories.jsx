import React, { useEffect, useState } from "react";
import { categories } from "../../config/basicUrls";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get(categories);
      setData(response.data);
      console.log(response.data);
      setLoading(false); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-center m-3">Categories</h1>

      {loading ? (
        <h4 className="text-center mt-5 text-danger">Loading...</h4>
        ) : (
        <div className="product-section">
          {data.map((value, index) => (
            <Link
              key={value.id}
              to={`/category/${value.id}`}
              className="text-decoration-none"
            >
              <Card style={{ width: "20rem", height: "20rem" }} key={value.id}>
                <Card.Img
                  variant="top"
                  src={value.image}
                  style={{ width: "20rem", height: "15rem" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">{value.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
