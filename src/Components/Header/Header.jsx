import React from "react";
import "./Header.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Header = () => {
  //for the responsiveness of carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="header" id="header">
        <div className="left-h">
          <div className="header-text">
            <div>
              <span className="stroke-text">What </span>
              <span>is</span>
            </div>
            <div>
              <span>Blockchain</span>
            </div>
            <div>
              <span>
              Blockchain is a shared, immutable ledger for recording transactions, tracking assets and building trust. Discover why businesses worldwide are adopting it.
              <br />
              Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network. Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.
              </span>
              <span> My BitCoins made more money doing nothing than I did all week at work.</span>
            </div>
          </div>
          <div className="header-buttonns">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right-h">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop",
            ]}
            className="owl-carousel owl-theme slider"
          >
            <div className="item">
              <img
                className="brand-img"
                src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/logo-blue-white.png"
                alt="Images"
              />
            </div>
            <div className="item">
              <img
                className="brand-img"
                src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/logo-partner-3.png"
                alt="Images"
              />
            </div>

            <div className="item">
              <img
                className="brand-img"
                src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/logo-partner-4.png"
                alt="Images"
              />
            </div>
            <div className="item">
              <img
                className="brand-img"
                src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/logo-partner-2.png"
                alt="Images"
              />
            </div>
            <div className="item">
              <img
                className="brand-img"
                src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/logo-partner-5.png"
                alt="Images"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};
