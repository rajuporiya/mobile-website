import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Slider = ({ start }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Carousel fade>
            {start.map((item,index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={item} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
