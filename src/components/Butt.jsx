import React from 'react'

function Butt({func, txt}) {
  return (
      <button
       style={{background: "green",
      borderRadius: "100px",
        color: "white",
        boarder: "none",
        padding: "10px 20px",
        margin: "10px",

        }}
            onClick={func}
            >{txt}</button>
    
)
}

export default Butt
