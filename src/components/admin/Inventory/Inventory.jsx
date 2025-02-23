import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import WeeklyChart from "./WeeklyChart";
import "./Inventory.css";

const Inventory = () => {
  return (
    <div className="inventory">
      <div className="top-bar">
        <h1>Dashboard</h1>
        <div className="user-info">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="user-avatar"
          />
          <div className="user-name">
            <h2>Ryan Sepulveda</h2>
          </div>
        </div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-left">
          <div className="widget-container">
            <div className="widget-section">
              <div className="widget widget-purple">
                <div className="widget-info">
                  <h3>Good</h3>
                  <p>Inventory Status</p>
                </div>
              </div>

              <div className="widget widget-pink">
                <div className="widget-info">
                  <h3>5200$</h3>
                  <p>Revenue: Jan 2022</p>
                </div>
              </div>

              <div className="widget widget-yellow">
                <div className="widget-info">
                  <h3>Medicine:</h3>
                  <p>50 Available</p>
                </div>
              </div>

              <div className="widget widget-orange">
                <div className="widget-info">
                  <h3>Medicine:</h3>
                  <p>120 Shortage</p>
                </div>
              </div>
              <div className="widget widget-green">
                <div className="widget-info">
                  <h3>Medicine:</h3>
                  <p>120 Shortage</p>
                </div>
              </div>
              <div className="widget widget-brown">
                <div className="widget-info">
                  <h3>Medicine:</h3>
                  <p>120 Shortage</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <section className="activitySection">
          <div className="heading flex">
            <h2>Recent Activities</h2>
          </div>

          <div className="secContainer grid">
            <div className="singleCustomer flex">
              <div className="customerDetails">
                <span className="name">Paul Mescal</span>
                <small>Requested for room</small>
              </div>
              <div className="duration">1 hour ago</div>
            </div>

            <div className="singleCustomer flex">
              <div className="customerDetails">
                <span className="name">Emma Chamberlain</span>
                <small>Placed an order</small>
              </div>
              <div className="duration">3 hours ago</div>
            </div>

            <div className="singleCustomer flex">
              <div className="customerDetails">
                <span className="name">Tom Holland</span>
                <small>Confirmed booking</small>
              </div>
              <div className="duration">5 hours ago</div>
            </div>
          </div>
        </section>
      </div>

      <div className="chart-container">
          <WeeklyChart />
      </div>
    </div>

  );
};

export default Inventory;
