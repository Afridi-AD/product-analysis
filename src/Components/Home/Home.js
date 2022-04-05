
import { useNavigate } from 'react-router-dom';
import './Home.css'

const Home = () => {
    
    const navigate = useNavigate()
    const showReviews =()=>{
    const path =`/reviews/`;
    navigate(path);
    }
    return (
        <div className='home'>
            <div>
            <h1 className='shoe'>Chose Your Favorite Shoe... <br />
            <h1 className='dsign'>Perfect Dsign For Man And Women</h1>

            </h1>
            <p>Wanna get best shoe ? You are in the right place. Trust on us to get best products . <br />
                The perfect size and color for woman as well as man. Quality is much more better...
            </p>
            <h4>Customer Reviews</h4>
            <button onClick={()=>navigate('/reviews')} className='review-btn'>See All Reviews</button>
            </div>
            <div>
                <img src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png" alt="" />
            </div>
            
        </div>
    );
};

export default Home;