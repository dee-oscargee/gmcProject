import React from 'react'
import './Nav.css'

function Navigation({nav, change, content}) {
  return (
    <header className={nav}>
      <div className="log">Oscargee Furnitures🛒🚴‍♂️Carta
      </div>
      <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
      <button className='mode' onClick={change}>{content}

      </button>
    </header>
  )
}

export default Navigation
