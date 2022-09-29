import React, { useState } from 'react';
import Male from '../../images/mail.jpg'



let mainTime = 0;
// const {notify} = props;
const SingleCart = ({workout , notify}) => {
    let time =0;
    for(const single of workout){
        time = time + single.Time;
    }
// const [number , setNumber] = useState()
// let number = 0;

const handleAddNumber = (num) => {
    console.log(num);
    localStorage.setItem('number' , JSON.stringify(num));


let breakTime = localStorage.getItem('number');
mainTime = JSON.parse(breakTime);
console.log(mainTime);
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

       <div className='mt-9 bg-white rounded-3xl w-[92%] mx-auto'>
        <h1 className='font-bold text-2xl my-3'>Exercise Details</h1>
        <h1 className='font-bold text-2xl text-left pl-5 pb-3'>Exercise time: {time}</h1>
        <h1 className='font-bold text-2xl text-left pl-5 pb-3'>Break time: {mainTime}</h1>
       </div>
       <button onClick={notify} className="btn btn-ghost btn-outline w-[95%] my-10 justify-center">Activity Complited</button>

      </div>
     
    );
};

export default SingleCart;