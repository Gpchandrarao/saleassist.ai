import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import axios from "axios";

import "./Jewelery.css";

const Jewelery = () => {
  const [jeweleryData, setJeweleryData] = useState([]);

  const fetchingBagData = async () => {
    const bagsUrl = "https://fakestoreapi.com/products";
    const response = await axios.get(bagsUrl);
    const data = response.data;
    console.log(data);
    setJeweleryData(data);
  };

  useEffect(() => {
    fetchingBagData();
  }, []);

  return (
    <div className="jewelery-container">
      {jeweleryData.map((each, index) => {
        return (
          <div key={index}>
            {each.category === "jewelery" && (
              <div>
                <img src={each.image} className="jewelery-img" />
                <div className="jewelery-price">
                  <p>{each.title}</p>
                  <p>
                    RS {"  "}
                    {each.price}
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

export default Jewelery;
