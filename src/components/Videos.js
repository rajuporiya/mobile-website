import React from 'react';
import VideoCard from '../components/VideoCard';
import '../styles/Videos.css';

const Videos = ({Videos}) => {
  return <div className='Videos'>
      {
          Videos.map((item,index)=>(
              <VideoCard key={item.image} name={item.name} image={item.image} index={index}/>
          ))
      }
  </div>;
};

export default Videos;
