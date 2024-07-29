import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'

function UsersInfo({name, username, email, phone, company}) {
  return (
    <div>
        <div className='User'>
            <div className='iconWrapper'>
    <FontAwesomeIcon icon={faUser} 

style={{
    color: "#fff",
    fontSize: "33px",
}} />

    <h2>Name: {name}</h2>
    <small>{email}</small>
    <div>Username<i>{username}</i></div>
    <p>Phone: {phone}</p>
    <p>Works at: {company.name} </p>
    </div>
    </div>
    </div>

  )
}

export default UsersInfo
