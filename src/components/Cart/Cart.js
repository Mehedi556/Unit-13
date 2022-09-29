import React from 'react';

const Cart = ({cart , handleAddToList}) => {
    const {picture , name , Time , id} = cart;
    return (
        <div className='border border-solid border-slate-300 rounded-xl p-3'>
           
           <img className='rounded-lg' src={picture} alt="" />
                <div className='text-left py-3 pb-6'>
                <h1><span className='font-bold'>Name: </span>{name}</h1>
                <h1><span className='font-bold'>Time required: </span>{Time}s</h1>
                </div>
                <button onClick={() => handleAddToList(cart)} className="btn btn-ghost btn-outline w-[100%] justify-center">Add to list</button>

            
        </div>
    );
};

export default Cart;