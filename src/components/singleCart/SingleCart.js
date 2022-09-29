import React, { useState } from 'react';
import Male from '../../images/mail.jpg'

const SingleCart = ({workout}) => {
    let time =0;
    for(const single of workout){
        time = time + single.Time;
    }
// const [number , setNumber] = useState()
let number = 0;
const handleAddNumber = (num) => {
    let number = handleAddNumber();
}
// console.log(number);
    return (
        <div>
       
       <div className='flex m-5 '>
        <img className='w-[80px] rounded-[50px] m-5' src={Male} alt="" />
        <div className='mt-7'>
            <h1 className='font-bold text-lg'>Zahid Hossain</h1>
            <p className='text-sm'>Sydney, Australia</p>
        </div>
       </div>

       <div className='flex text-2xl gap-4 justify-center bg-white rounded-3xl w-[92%] mx-auto py-4'>
        <div>
            <h1><span className='font-bold text-4xl'>75</span>  kg</h1>
            <h1 className='font-bold text-2xl'>Weight</h1>
        </div>
        <div>
            <h1><span className='font-bold text-4xl'>25</span> yrs</h1>
            <h1 className='font-bold text-2xl'>Age</h1>
        </div>
        <div>
            <h1><span className='font-bold text-4xl'>6.5</span></h1>
            <h1 className='font-bold text-2xl'>Height</h1>
        </div>
       </div>

       

       

      

      </div>
     
    );
};

export default SingleCart;