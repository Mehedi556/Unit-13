import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SingleCart from '../singleCart/SingleCart';
  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <SingleCart notify={notify}></SingleCart>
       
        <ToastContainer />
      </div>
    );
  }