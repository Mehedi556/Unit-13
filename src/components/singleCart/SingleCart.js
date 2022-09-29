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

       <div className='mt-9 bg-white rounded-3xl w-[92%] mx-auto pb-5'>
        <h1 className='font-bold text-2xl my-3'>Add A Break</h1>
        <button onClick={() => handleAddNumber(10)} className='font-bold p-3 bg-slate-300 rounded-3xl mr-2'>10s</button>
        <button onClick={() => handleAddNumber(20)} className='font-bold p-3 bg-slate-300 rounded-3xl mr-2'>20s</button>
        <button onClick={() => handleAddNumber(30)} className='font-bold p-3 bg-slate-300 rounded-3xl mr-2'>30s</button>
        <button onClick={() => handleAddNumber(40)} className='font-bold p-3 bg-slate-300 rounded-3xl mr-2'>40s</button>
        <button onClick={() => handleAddNumber(50)} className='font-bold p-3 bg-slate-300 rounded-3xl mr-2'>50s</button>
        
       </div>

       

      

      </div>
     
    );
};

export default SingleCart;