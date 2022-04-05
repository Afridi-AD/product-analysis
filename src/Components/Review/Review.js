import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name,ratngs,about} = props.review
    return (
        <div className='reviews'>
          <h2>Name : {name}</h2> 
          <h4>Ratings :{ratngs}</h4> 
          <p> Feedback :{about}</p>
        </div>
    );
};

export default Review;