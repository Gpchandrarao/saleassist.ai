import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

import "./Electronics.css";
const Electronics = () => {
  const [electronicsData, setElectronicsData] = useState([]);

  const fetchingBagData = async () => {
    const bagsUrl = "https://fakestoreapi.com/products";
    const response = await fetch(bagsUrl);
    const data = await response.json();
    console.log(data);
    setElectronicsData(data);
  };

  useEffect(() => {
    fetchingBagData();
  }, []);

  return (
    <div className="electronics-container">
      {electronicsData.map((each, index) => {
        return (
          <div key={index}>
            {each.category === "electronics" && (
              <div>
                <img src={each.image} className="electronics-img" />
                <div className="electronics-price">
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

export default Electronics;
