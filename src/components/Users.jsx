import React, {useState, useEffect} from 'react'
import axios from 'axios';
import UsersInfo from './UsersInfo';
// import UsersInfo from './UsersInfo';


function Users() {
    const [users, setUser] = useState(null)

    const fetchData = async()=>{
        const response = await axios.get
        ('https://jsonplaceholder.typicode.com/users')

        console.log(response.data)
        setUser(response.data)
    }
    

    useEffect(
        ()=> {
             fetchData()
        },
        []
      )


  return (
    <>
    <div 
    style={{display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px"
    }}>
    <div>Users</div>
    {users&&users.map(i=><UsersInfo {...i}/>)}
  
    </div>
    </>


  )
}

export default Users
