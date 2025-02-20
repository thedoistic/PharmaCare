import React, { useEffect } from "react";
import "./sidebar.css";

import { FaHome, FaShippingFast, FaCartPlus } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { MdOutlineEmojiPeople, MdOutlineLogin } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";

const Sidebar = () => {
  useEffect(() => {}, []);

  return (
    <div className="sideBar">

      <div className="menuDiv">

        <h3 className="divTitle">Menu</h3>

        <ul className="menuLists">

          <li className="listItem" key="dashboard">
            <a href="#" className="menuLink">
              <FaHome className="icon" />
              <span>Dashboard</span>
            </a>
          </li>

          <li className="listItem" key="customers">
            <a href="#" className="menuLink">
              <MdOutlineEmojiPeople className="icon" />
              <span>Customers</span>
            </a>
          </li>

          <li className="listItem" key="orders">
            <a href="#" className="menuLink">
              <FaShippingFast className="icon" />
              <span>Orders</span>
            </a>
          </li>

          <li className="listItem" key="products">
            <a href="#" className="menuLink">
              <FaCartPlus className="icon" />
              <span>Products</span>
            </a>
          </li>

          <li className="listItem" key="reports">
            <a href="#" className="menuLink">
              <BiSolidReport className="icon" />
              <span>Reports</span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">

        <h3 className="divTitle">Settings & Help Center</h3>

        <ul className="menuLists">
  
          <li className="listItem" key="logout">
            <button
              onClick={() => {
                localStorage.removeItem("authToken");
                window.location.reload();
              }}
              className="buttonStyle"
              style={{
                background: "none",
                border: "none",
                color: "var(--accent-color)",
                cursor: "pointer",
                fontSize: "1.5rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MdOutlineLogin className="icon" />
              <span>Log Out</span>
            </button>
          </li>
          <li className="listItem" key="help">

            <div className="sideBarCard">
              <BsQuestionCircle className="icon" />

              <div className="cardContent">
                <h3>Help Center</h3>
                <p>Having trouble? Please contact us!</p>
                <button className="btn">Go to Help Center</button>
              </div>
              
              <div className="circle1"></div>
              <div className="circle2"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
