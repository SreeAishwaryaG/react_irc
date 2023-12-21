

import React, { useRef, useState } from 'react';
import './Home.css';
import toyName from '../assests/toybike.jpeg';
import teddy from '../assests/teddy.jpeg';
import unicorn from '../assests/unicorn.jpeg';
import woody from '../assests/woody.jpeg';
import bingbong from '../assests/bingbong.jpeg';
import pinocchio from '../assests/pinocchio.jpeg';
import lightening from '../assests/ligtening.jpeg';
import mater from '../assests/mater.jpeg';
import stich from '../assests/stich.jpeg';
import penguin from '../assests/penguin.jpeg';
import babybee from '../assests/babybee.jpeg';
import minitruck from '../assests/minitruck.jpeg';
import { Link } from 'react-router-dom';

const ToyStoreHomePage = () => {
  const bestSellersRef = useRef(null);

  const scrollToBestSellers = () => {
    bestSellersRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [heartClicked, setHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <div className='container'>
      <div className='homeh1'>
        <h1>Welcome to Our ToyT</h1>
      </div>
      <div className='homep1'>
        <p>Discover a world of fun and exciting toys for children of all ages.</p>
        <div>
          <button type='button' className='homebutton' onClick={scrollToBestSellers}>
            EXPLORE NOW
          <div className='arrow-animation'></div>
          </button>
        </div>
      </div>
      <div className='card-container'>
        <div ref={bestSellersRef}>
          <div className='cardtitle'>
            <h1 className='cardT'>BestSellers</h1>
          </div>
          {/* Add other elements of the BestSellers section here */}
        </div>

      


         <div className='card'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={toyName}></img>
        </div>
        <p className='card1h1'>Toyt mini BIKE - Red | ₹ 230</p>
        <Link to='/details'>
        <button type='button'className='cdbutton1'>BUY</button>
        </Link>
       </div>
      

        <div className='card1'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={teddy}></img>
        </div>
        <p className='cardh1'>Toyt Teddy large | ₹ 555</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>
       

        <div className='card2'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={unicorn}></img>
        </div>
        <p className='cardh1'>Unicorn Plushie | ₹ 655</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>
      
      

      <div className='card3'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={woody}></img>
        </div>
        <p className='cardh1'>Disney's Woody | ₹ 955</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>

        <div className='card4'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={pinocchio}></img>
        </div>
        <p className='cardh1'>Disney's Pinocchio | ₹ 789</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>
        <div className='card5'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={bingbong}></img>
        </div>
        <p className='cardh1'>Inside Out BingBong | ₹ 887</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div> 
 {/* ----------------------------------------------------------------------------------------- */}
       <div >
          <h1 className='cardtitle2'>Popular Picks</h1>
        </div>


        <div className='card6'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={mater}></img>
        </div>
        <p className='card1h1'>Toyt mini BIKE - Red | ₹ 230</p>
       
        <button type='button'className='cdbutton1'>BUY</button>
       </div>
      

        <div className='card7'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={lightening}></img>
        </div>
        <p className='cardh1'>Toyt Teddy large | ₹ 555</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>
       

      <div className='card8'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={stich}></img>
        </div>
        <p className='cardh1'>Unicorn Plushie | ₹ 655</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>
      
      

        <div className='card9'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={babybee}></img>
        </div>
        <p className='cardh1'>Disney's Woody | ₹ 955</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>

       <div className='card10'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={penguin}></img>
        </div>
        <p className='cardh1'>Disney's Pinocchio | ₹ 789</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div>
       <div className='card11'>
        <div className='image'>
        <div
            className={`heart-icon ${heartClicked ? 'heart-clicked' : ''}`}
            onClick={handleHeartClick}
          >
            ❤
          </div>
        <img src={minitruck}></img>
        </div>
        <p className='cardh1'>Inside Out BingBong | ₹ 887</p>
       
        <button type='button'className='cdbutton'>BUY</button>
       </div> 

       {/* </div>  */}
       </div>   
    </div>
  
  );
};

export default ToyStoreHomePage;
