import React from "react";
import "./Solution.css";

const Solution = () => {
  return (
    <>
    <div className="solution" id="solution">
      <div className="left-s">
        <span>Blockchain Platform</span>
        <div>
          <span className="stroke-text">Blockchain </span>
          <span>solution</span>
        </div>
        <div className="details-s">
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              quae, eligendi iure totam magni quos consequatur dolorem ipsum
              odio, sunt facilis architecto ipsa at pariatur quasi repellendus!
              Fugit, ad magnam?
            </span>
          </div>
        </div>
      </div>
      <div className="right-s">
        <div className="box-outer">
        <div className="boxes">
          <div className="box box-1">
            <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/bitcoin-encryption.png" alt="" />
            <div>
            <h2>Professional</h2>
            <h2>Safe and</h2>
            <h2>Secure</h2>
            </div>
          </div>
          <div className="box box-2">
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/cryptocurrencies-going-up.png" alt="" />
            <div>
            <h2>Profitable </h2>
            <h2>and Good</h2>
            <h2>Investment</h2>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="box box-3">
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/bitcoin-wallet-a.png" alt="" />
            <div>
            <h2>Integrated </h2>
            <h2>Mobile App</h2>
            <h2>Wallet</h2>
            </div>
          </div>
          <div className="box box-4">
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/withdraw-a.png" alt="" />
            <div>
            <h2>Multiple</h2>
            <h2>Curency</h2>
            <h2>Support</h2>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
    {/* svg img for tilted border */}
    <svg className="svg-img-s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="elementor-shape-fill" d="M0 6V0h1000v100L0 6z"/></svg>
    </>
  );
};

export default Solution;
