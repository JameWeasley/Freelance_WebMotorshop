import React from "react";

export default function navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-con">
            <div className="logo">
              <img src="" alt="" />
            </div>

            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
