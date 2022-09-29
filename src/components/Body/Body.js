import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Body.css';

import SingleCart from '../singleCart/SingleCart';

const Body = () => {
  const [cart, setCart] = useState([]);
  const [workout , setWorkout] = useState([]);


  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setCart(data));
    //   console.log(cart);
  }, []);

  const handleAddToList = (cart) => {
    const newCart = [...workout , cart];
    setWorkout(newCart);
  }

  return (
    <div className="body block md:flex gap-5">
      

      <div className="right-side w-4/4 md:w-2/4 lg:w-1/4 bg-slate-100 rounded-lg justify-center">
       <SingleCart workout={workout}></SingleCart>
    
      </div> 
    </div>
  );
};

export default Body;
