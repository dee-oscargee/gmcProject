import React from 'react'
import './Hero.css'
import Butt from './Butt'
import { toast } from 'react-toastify'

function Hero() {

  const notify =()=> toast.success
  ("welcome to OSCARGEE STORE")

  return (
    <div className='Hero' style={{backgroundImage: "url('/assest/imgFF002.jpg')"

    }}>
        <div className='welcome'>
<h1>Welcome To Our Home Of Furnitures:</h1>
<p>We sell affordable Furnitures</p>
      <Butt txt="Go to store" func={notify}/>
        </div>
    
    </div>
  )
}

export default Hero
