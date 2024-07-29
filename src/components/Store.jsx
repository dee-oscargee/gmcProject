import React from 'react'
import data from '../product.json'
import Card from './Card'
import './Store.css'

function Store() {
  return (
    <div className='che'>
    {data.map(i=>(<Card key={i.id} {...i}/>))}
    
        
     
  
</div>
  )
}

export default Store






