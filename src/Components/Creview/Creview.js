import React from 'react';

const Creview = (props) => {
    const {name,ratngs,about} = props.cReview
    
    return (
        <div>
        <h2>Name : {name}</h2> 
        <h4> Ratings : {ratngs}</h4> 
        <p> Feedback :{about}</p>
      </div>
    );
};

export default Creview;