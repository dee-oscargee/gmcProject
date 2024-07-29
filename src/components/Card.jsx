import React, {useState} from 'react';
import Butt from "./Butt";
import './Card.css'


function Card ({name, img, price, description}) {

  const [quantity, setQuantity] = useState(0); 

  const addQuantity = ()=>{
    setQuantity(quantity+1)
}

const removeQuantity = ()=>{
  setQuantity(quantity-1)
}

    return (
      <div className='Card'>
        <img src={img} alt={name} />
        <div className='details'>
          <h2>{name} </h2>
            <div className='info'>
            <details>
              More info
              <summary>{description}</summary>
            </details>
            <h3>{price}</h3>
            </div>
        <>
        {quantity ? (
        <div className="qnty">
          <Butt txt="-" func={removeQuantity} />
          {quantity}
          <Butt txt="+" func={addQuantity} />
          </div>
        ) : (
            <Butt func={addQuantity} txt="Add to cart"/>
   ) }{""}

          </>  
          </div>  
          </div>
       
          
          
        
        
    );
  }
  
  export default Card;