import React, { useEffect, useState } from "react";

const Extra = () => {
  const [photoes, setPhotoes] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("extra.json")
      .then((res) => res.json())
      .then((data) => setPhotoes(data));
  }, []);

  const handleToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="p-12">
      {/* gallery scroll issue */}
      {/* <div>
        
      <div className=" grid grid-cols-5 gap-1">
        {photoes.map((photo) => (
          <div key={photo.id}>
            <img onClick={() =>handleToCart(photo)} src={photo.pic} alt="" />
          </div>
        ))}
      </div>
      <div className="flex gap-3 overflow-scroll my-12">
        {cart.map((ab) => (
          <div key={ab.id}>
            <img style={{minWidth:"250px"}} src={ab.pic} alt="" />
          </div>
        ))}
      </div>
      <div className="flex gap-3 overflow-x-scroll my-12">
      
            <img className="w-full" src={people} alt="" />
            <img className="w-full" src={people} alt="" />
            <img className="w-full" src={people} alt="" />
            <img className="w-full" src={people} alt="" />
            <img className="w-full" src={people} alt="" />
            <img className="w-full" src={people} alt="" />
         
      </div>
      </div> */}

      <div></div>
    </div>
  );
};

export default Extra;
