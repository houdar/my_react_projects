import React from "react";
import { useState } from "react";
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [reading, setReading] = useState(false);
  console.log(info.substring(0, 10));
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h3 className="name">{name}</h3>
        <p>{reading ? info : `${info.substring(0, 100)}...`}</p>
        <button
          type="button"
          className="info-btn"
          onClick={() => setReading(!reading)}
        >
          {reading ? "show less" : "read more"}
        </button>

        <button
          type="button"
          onClick={() => removeTour(id)}
          className="btn btn-block btn-delete "
        >
          not interrested
        </button>
      </div>
    </article>
  );
};

export default Tour;
