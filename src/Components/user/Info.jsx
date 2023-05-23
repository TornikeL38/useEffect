import "./style.css"
import React, { useEffect, useState } from "react"



const Info = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
        <div>
            <h1 className="title">All Customers</h1>
            <div id="wrapper">
                <p>Customer Name</p>
                <p>Company</p>
                <p>Phone Number</p>
                <p>Email</p>
                <p>Street</p>
            </div>
            {users.length > 0 && 
            users.map(user => (
                <div className="userData" key={user.id}>
                <p>{user.name}</p>
                <p>{user.company.name}</p>
                <p>{user.phone}</p>
                <p>{user.email}</p>
                <p>{user.address.street}</p>
            </div>
            ))}
            
        </div>
  );
}

export default Info 


