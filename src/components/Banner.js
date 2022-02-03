import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
const Banner = ({banner}) => {
  return <div>
      <Carousel>
          {
              banner.map((item,index)=>(
                  <CarouselItem key={item.image} id='banner' interval={2000}>
                      <img className='d-block w-100' id='bannerImage' src={item.image} alt={`${index} banner`}/>
                      <Carousel.Caption>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                          <p>{item.source}</p>
                          <u>{item.image}</u> <br/>
                          <a className='text-white' href='#'>Read More</a>
                      </Carousel.Caption>   
                  </CarouselItem>
              ))
          }
      </Carousel>
  </div>;
};

export default Banner;
