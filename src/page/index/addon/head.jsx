import React from "react";
import { Link } from 'react-router-dom';  

export default function head() {

  
  return (
    <>
      <div className="container">
        <div className="product info">
          <div
            className="img-product"
            style={{ display: "flex" }}
          >
            <Link to="/store">
              <img
                src="2.jpg"
                alt=""
                width="100%"
              />
            </Link>
            <Link to="/store">
              <img
                src="1.jpg"
                alt=""
                width="100%"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
