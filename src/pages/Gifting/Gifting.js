import React, { useEffect, useState } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";

import "./Gifting.css";
const Gifting = () => {
  const [giftingData, setGiftingData] = useState([]);

  const fetchingBagData = async () => {
    const bagsUrl = "https://fakestoreapi.com/products";
    const response = await fetch(bagsUrl);
    const data = await response.json();
    console.log(data);
    setGiftingData(data);
  };

  useEffect(() => {
    fetchingBagData();
  }, []);

  return (
    <div className="gifting-container">
      {giftingData.map((each, index) => {
        return (
          <div key={index}>
            <img src={each.image} className="gifting-img" />
            <div className="gifting-price">
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
        );
      })}
    </div>
  );
};

export default Gifting;
