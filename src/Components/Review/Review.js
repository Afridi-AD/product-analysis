import React from 'react';

const Review = (props) => {
    const {name,ratngs,about} = props.review
    return (
        <div>
          <h2>Name : {name}</h2> 
          <h4>{ratngs}</h4> 
          <p>{about}</p>
        </div>
    );
};

export default Review;