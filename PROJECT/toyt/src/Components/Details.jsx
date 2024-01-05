import React from 'react'
import toyName from '../assests/toybike.jpeg';
import './Details.css';
import { Link } from 'react-router-dom';
function Details() {
  return (
    <div>
        <div className='detailcard'>
            <img src={toyName}></img>
            <p className='toy'>TOY BIKE | 755</p>
        </div>
        <div className='details'>
          <h1 className='head'>Unleash Adventure with Toybike</h1>
          <p className='para'>
        

Embark on a thrilling journey as you delve into the details of Toybike! Click and explore the vibrant colors, sturdy design, and intricate features that make this toy a favorite among little adventurers. Toybike is not just a plaything; it's a portal to a world where every ride sparks imaginative escapades. Join the fun and let the adventure unfold with Toybike!
            </p>
           <Link to='/pay'>
            <button type='button' className='dbutton'>Buy</button>
            </Link>
         </div>
    </div>
  )
}

export default Details