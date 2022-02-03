import React from 'react';
import Offer from '../components/Offer';
import '../styles/Offers.css';
const Offers = ({Offers}) => {
  return <div className='offersSection'>
      {
          Offers.map((item,index)=>(
              <Offer key={index} index={index} src={item.image} link={item.url}/>
          ))
      }
  </div>;
};

export default Offers;
