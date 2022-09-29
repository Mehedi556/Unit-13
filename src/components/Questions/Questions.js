import React from 'react';

const Questions = () => {
    return (
        <div className='my-10'>
           <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    How does react work
  </div>
  <div className="collapse-content"> 
    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
  </div>
</div>





<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is the difference between props and state?
  </div>
  <div className="collapse-content"> 
    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
  </div>
</div>




<div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    Where we can use useEffect without loading data?
  </div>
  <div className="collapse-content"> 
    <p>With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.<br></br>
    
    What are effects, really? Examples are:

Fetching data 
Reading from local storage
Registering and deregistering event listeners
React’s effects are a completely different animal than the lifecycle methods of class-based components. The abstraction level differs, too.
    </p>
  </div>
</div>



        </div>
    );
};

export default Questions;