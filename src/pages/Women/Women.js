import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

import "./Women.css";
const Women = () => {
  const [womenData, setWomenData] = useState([]);

  const fetchingBagData = async () => {
    const bagsUrl = "https://fakestoreapi.com/products";
    const response = await fetch(bagsUrl);
    const data = await response.json();
    console.log(data);
    setWomenData(data);
  };

  useEffect(() => {
    fetchingBagData();
  }, []);

  return (
    <div className="women-container">
      {womenData.map((each, index) => {
        return (
          <div key={index}>
            {each.category === "women's clothing" && (
              <div>
                <img src={each.image} className="women--img" />
                <div className="women--price">
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

export default Women;
