import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalPics from "../components/AnimalPics";

const pictures = [
  "../../../img/pet-clothing-1.png",
  "../../../img/pet-clothing-2.png",
  "../../../img/pet-clothing-3.png",
  "../../../img/pet-clothing-4.png",
];

function Users() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => setData(res))
      .catch((error) => console.error("Fetching error:", error));
  }, []);

  return (
    <div>
      <Header />
      {!data ? (
        <h1 className="empty">Users List is Empty...</h1>
      ) : (
        <div className="user-cards-container wrapper">
          {data.data.map((user, index) => (
            <div className="clothing_item" key={index}>
              <img src={pictures[index % pictures.length]} alt="Grey Hoodie" />
              <div className="user_item">
                <h1 className="infoDog">Dog Name: {user.dogname}</h1>
                <h2 className="infoName">Owner Name: {user.username}</h2>
                <h2 className="infoMail">Owner Mail: {user.mail}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
      <AnimalPics />
      <Footer />
    </div>
  );
}

export default Users;
