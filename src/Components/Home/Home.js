
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Creview from '../Creview/Creview';
import './Home.css'

const Home = () => {
    const [cReveiws,setCreviews] =useState([]);
    useEffect(()=>{
        fetch('shoe.json')
        .then(res=>res.json())
        .then(data =>setCreviews(data));
    },[])
    
    const navigate = useNavigate()
    const showReviews =()=>{
    const path =`/reviews/`;
    navigate(path);
    }
    return (
        <div>


            <div className='home'>
            <div>
            <h1 className='shoe'>Chose Your Favorite Shoe... <br />
            <h1 className='dsign'>Perfect Dsign For Man And Women</h1>

            </h1>
            <p>Wanna get best shoe ? You are in the right place. Trust on us to get best products . <br />
                The perfect size and color for woman as well as man. Quality is much more better...
            </p>
            
            <button onClick={()=>navigate('/reviews')} className='review-btn'>See All Reviews</button>
            </div>
            
                <div>
                <img src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" alt="" />
                </div>
            
            </div>
            
            
            
            <div className='review'>
                <h1>Customer Review..</h1>
            {
                cReveiws.slice(0,3).map(cReview=><Creview
                key={cReview.id}
                cReview={cReview}
                ></Creview>)
            }
            </div>
            

           
            
        </div>
    );
};

export default Home;