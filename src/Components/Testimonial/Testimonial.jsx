import React from "react";
import "./Testimonial.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Testimonial = () => {
  //this is for the responsive carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
    <section className="testimonial-section" >
    <svg className="svg-img-t" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path class="elementor-shape-fill" d="M0 6V0h1000v100L0 6z"/></svg>
     <div className="testimonial">
     <div className="left-t">
        <div className="img-outer-bx">
        <div className="img-bx user-img1">
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-6-2x.jpg" alt="" />
        </div>
        <div className="img-bx user-img2">
        <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-1-2x.jpg" alt="" />
        </div>
        <div className="img-bx user-img3">
        <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-3-2x.jpg" alt="" />
        </div>
        </div>
        <div className="img-outer-bx">
        <div className="img-bx user-img4">
          <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-5-2x.jpg" alt="" />
        </div>
        <div className="img-bx user-img5">
        <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-2-2x.jpg" alt="" />
        </div>
        <div className="img-bx user-img6">
        <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-4-2x.jpg" alt="" />
        </div>
        </div>
        <div className="testimonial-text" id="testimonial">
          <h1>Over <span>1K+</span></h1>
          <h1>Global User Participation</h1>
        </div>
     </div>
     <div className="right-t">
     <Carousel className="carousel"
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            focusOnSelect={false}
            infinite
            removeArrowOnDeviceType={["tablet", "mobile","superLargeDesktop","desktop"]}
            swipeable
          >
            <div className="carousel-item active">
            <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-4-2x.jpg" alt="" />
              <h3>Clara Jepsen</h3>
              <p>manager</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum quam reiciendis temporibus cum eaque facere id sint, corporis voluptates quos placeat consectetur dolores eius architecto quo excepturi ea? Exercitationem?</p>
            </div>
            <div className="carousel-item active ">
            <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-2-2x.jpg" alt="" />
              <h3>Steven CHaw</h3>
              <p>manager</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum quam reiciendis temporibus cum eaque facere id sint, corporis voluptates quos placeat consectetur dolores eius architecto quo excepturi ea? Exercitationem?</p>
            </div>
            <div className="carousel-item active">
            <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-5-2x.jpg" alt="" />
              <h3>Doe Salaban</h3>
              <p>manager</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum quam reiciendis temporibus cum eaque facere id sint, corporis voluptates quos placeat consectetur dolores eius architecto quo excepturi ea? Exercitationem?</p>
            </div>
            <div className="carousel-item active">
            <img src="https://templatekit.jegtheme.com/acco/wp-content/uploads/sites/50/2021/03/user-3-2x.jpg" alt="" />
              <h3>Jenie Doe</h3>
              <p>manager</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum quam reiciendis temporibus cum eaque facere id sint, corporis voluptates quos placeat consectetur dolores eius architecto quo excepturi ea? Exercitationem?</p>
            </div>
          </Carousel>
     </div>
     </div>
    </section>
    </>
  );
};

export default Testimonial;
