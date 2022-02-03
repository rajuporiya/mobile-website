import React from 'react';
import HotItemCard from './HotItemCard';
import '../styles/HotAccessories.css';
const HotAccessories = ({music,smartDevice,cover,home,lifestyle,mobileAccessories}) => {
  return <div className='HotAccessories'>
    <div className='musicCover'>
      <img src={cover} alt='Cover'/>
    </div>
    <div>
      {
        music && music.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))
      }
      
      {
        smartDevice && smartDevice.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))
      }

      {
        home && home.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))
      }

      {
        lifestyle && lifestyle.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        ))
      }

      {
        mobileAccessories && mobileAccessories.map((item,index)=>(
          <HotItemCard key={item.image} name={item.name} price={item.name} image={item.image}/>
        ))
      }
    </div>
  </div>;
};

export default HotAccessories;
