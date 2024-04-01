import React from "react";
import { FaCartPlus } from "react-icons/fa";

export default function navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-con">
            <div className="logo">
              <img
                src="logo2.png"
                alt=""
                width="100"
                style={{ padding: "1rem" }}
              />
            </div>

            <ul className="menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/store">Product</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>

            <div className="cart text-white" style={{ fontSize: "20px", cursor: 'pointer' }}>
              <div className="cart-btn">
                <FaCartPlus />
                <span>ตะกร้าสินค้า</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
