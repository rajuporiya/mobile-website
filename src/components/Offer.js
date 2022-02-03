import React from 'react';

const Offer = ({src,index,link}) => {
  return <div>
      <a href={link}><img src={src} alt={`${index} offer`}/></a>
  </div>;
};

export default Offer;
