import React from "react";
import photo1 from '../../assets/family-photo/photo1.png';
import photo2 from '../../assets/family-photo/photo2.png';
import photo3 from '../../assets/family-photo/photo3.png';
import photo4 from '../../assets/family-photo/photo4.png';
import photo5 from '../../assets/family-photo/photo5.png';
import photo6 from '../../assets/family-photo/photo6.png';
import photo7 from '../../assets/family-photo/photo7.png';
import photo8 from '../../assets/family-photo/photo8.png';
import photo9 from '../../assets/family-photo/photo9.png';
import photo10 from '../../assets/family-photo/photo10.png';
import photo11 from '../../assets/family-photo/photo11.png';
import photo12 from '../../assets/family-photo/photo12.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const PhotoSlider = ({pic}) => {
    const photos  = [
        {
            picture:photo1
        },
        {
            picture:photo2
        },
        {
            picture:photo3
        },
        {
            picture:photo4
        },
        {
            picture:photo5
        },
        {
            picture:photo6
        },
        {
            picture:photo7
        },
        {
            picture:photo8
        },
        {
            picture:photo9
        },
        {
            picture:photo10
        },
        {
            picture:photo11
        },
        {
            picture:photo12
        },
    ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="px-12">
      <Carousel
        swipeable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
      {/* {
        photos.map((photo,index)=><div key={index} className="">
             <NavLink to='/dashboard/photoDetails'> <img src={photo.picture} alt=""/></NavLink>
        </div>)
      } */}
     <div className="flex">
     <img src={pic} alt=""/>
     </div>
    
      </Carousel>
     
    </div>
  );
};

export default PhotoSlider;
