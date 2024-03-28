import axios from "axios";
import React, { useEffect, useState } from "react";
import { users } from "../../config/basicUrls";
import "./user.css";

const User = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(users);
      setUsersData(response.data);
      console.log(response.data);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="user-section container mt-3">
      <h2 className="text-center mb-5">Users</h2>
      {loading ? (
        <h4 className="text-center mt-5 text-danger">Loading...</h4>
        ) : (
        usersData.map((user) => (
          <div className="user-card shadow" key={user.id}>
            <div className="name-section fs-5">{user.name}</div>
            <div className="email-section fs-5">{user.email}</div>
            <div className="avathar-section">
              <img src={user.avatar} alt="" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default User;
