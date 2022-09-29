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

       

       

       

      

      </div>
     
    );
};

export default SingleCart;