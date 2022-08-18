import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const mobile = window.innerWidth <= 768 ? true : false; //width for mobile
  const [menuOpened, setMenuOpened] = useState(false); //initially menu button is closed for mobile devices so it is set to false
  return (
    <nav className="navbar" id="navbar">
      <img
        src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/02/white-acco-logo.png"
        alt=""
        className="logo"
      />
      {menuOpened === false && mobile === true ? (
        <div
          onClick={() => {
            setMenuOpened(true);
          }}
          style={{
            backgroundColor: "transparent",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png"
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="navbar-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="header"
              activeClass="active"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="solution"
              span={true}
              smooth={true}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="calculator"
              span={true}
              smooth={true}
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="chart"
              span={true}
              smooth={true}
            >
              Chart
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonial"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
