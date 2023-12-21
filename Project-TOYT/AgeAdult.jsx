import React,{useState} from 'react'
import toyName from '../assests/ludo.jpeg';
import teddy from '../assests/Ageadult/infinitycube.jpg';
import unicorn from '../assests/Ageadult/popping.jpeg';
import woody from '../assests/Ageadult/spinner.jpeg';
import bingbong from '../assests/Ageadult/stress.jpeg';
import pinocchio from '../assests/Ageadult/toygun.jpeg';
import lightening from '../assests/ligtening.jpeg';
import mater from '../assests/mater.jpeg';
import stich from '../assests/stich.jpeg';
import penguin from '../assests/penguin.jpeg';
import babybee from '../assests/babybee.jpeg';
import minitruck from '../assests/minitruck.jpeg';
import "./AgeOne.css";
const AgeOne = () => {
    const [heartClicked, setHeartClicked] = useState(false);

    const handleHeartClick = () => {
      setHeartClicked(!heartClicked);
    };
  return (
    <div>
         <div className='title'>For Kids
        </div>
        <div>
      <div className='onecard-container'>
    <div className='onecard'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={toyName}></img>
     </div>
     <p className='onecard1h1'>Toyt mini BIKE - Red | ₹ 230</p>
    
     <button type='button'className='onecdbutton1'>BUY</button>
    </div>
   

     <div className='onecard1'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={teddy}></img>
     </div>
     <p className='onecardh1'>Toyt Teddy large | ₹ 555</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>
    

     <div className='onecard2'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={unicorn}></img>
     </div>
     <p className='onecardh1'>Unicorn Plushie | ₹ 655</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>
   
   

   <div className='onecard3'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={woody}></img>
     </div>
     <p className='onecardh1'>Disney's Woody | ₹ 955</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>

     <div className='onecard4'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={pinocchio}></img>
     </div>
     <p className='onecardh1'>Disney's Pinocchio | ₹ 789</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>
     <div className='onecard5'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={bingbong}></img>
     </div>
     <p className='onecardh1'>Inside Out BingBong | ₹ 887</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div> 
{/* ----------------------------------------------------------------------------------------- */}
  


     <div className='onecard6'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={mater}></img>
     </div>
     <p className='onecard1h1'>Toyt mini BIKE - Red | ₹ 230</p>
    
     <button type='button'className='onecdbutton1'>BUY</button>
    </div>
   

     <div className='onecard7'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={lightening}></img>
     </div>
     <p className='onecardh1'>Toyt Teddy large | ₹ 555</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>
    

   <div className='onecard8'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={stich}></img>
     </div>
     <p className='onecardh1'>Unicorn Plushie | ₹ 655</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>
   
   

     <div className='onecard9'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={babybee}></img>
     </div>
     <p className='onecardh1'>Disney's Woody | ₹ 955</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>

    <div className='onecard10'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={penguin}></img>
     </div>
     <p className='onecardh1'>Disney's Pinocchio | ₹ 789</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div>
    <div className='onecard11'>
     <div className='oneimage'>
     <div
         className={`oneheart-icon ${heartClicked ? 'oneheart-clicked' : ''}`}
         onClick={handleHeartClick}
       >
         ❤
       </div>
     <img src={minitruck}></img>
     </div>
     <p className='onecardh1'>Inside Out BingBong | ₹ 887</p>
    
     <button type='button'className='onecdbutton'>BUY</button>
    </div> 
   </div>
   </div>
 </div>
  )
}

export default AgeOne