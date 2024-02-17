import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

import "./MenClothing.css";
const MenClothing = () => {
  const [bagData, setBagData] = useState([]);

  const fetchingBagData = async () => {
    const bagsUrl = "https://fakestoreapi.com/products";
    const response = await fetch(bagsUrl);
    const data = await response.json();
    console.log(data);
    setBagData(data);
  };

  useEffect(() => {
    fetchingBagData();
  }, []);

  return (
    <div className="men-container">
      {bagData.map((eachBag, index) => {
        return (
          <div key={index}>
            {eachBag.category === "men's clothing" && (
              <div>
                <img src={eachBag.image} className="men-img" />
                <div className="price">
                  <p>{eachBag.title}</p>
                  <p>
                    RS {"  "}
                    {eachBag.price}
                    <span>
                      (50% off)
                      <MdOutlineShoppingBag className="bag" />
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenClothing;
