import React from 'react'
import { useState } from "react";
const CardTitle = ({name, img, options}) => {
      const [toggle, setToggle] = useState(true);
    const handleMouseEnter = (e) => {
      e.target.querySelector(".img-icon").style.transform = "scale(0.90)";
    };

    const handleMouseOver = (e) => {
      e.target.querySelector(".img-icon").style.transform = "scale(1)";
    };

    const handleClick = (e) => {
      setToggle(!toggle)
    };
  return (
    <div
      onClick={(e) => handleClick(e)}
      className="col-6 card me-3"
      role="button"
      onMouseEnter={handleMouseEnter}
      // onMouseOver={handleMouseOver)
      onMouseLeave={handleMouseOver}
    >
      <div>
        {toggle ? (
          <div>
            <img
              src={img}
              alt=""
              width="120px"
              className="img-icon"
              height="100px"
            ></img>
            <h6>{name}</h6>
          </div>
        ) : (
          <div className="card-back">
            {options.map((item, i) => (
              <ul>
                <li key={i}>{item}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardTitle