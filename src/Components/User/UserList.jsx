import React, { useState, useEffect } from 'react'
import { HomePage } from '../HomePage/HomePage'
import { Link } from 'react-router-dom'


export const UserList = () => {

const [user, setUsers] = useState([])

useEffect(() => {
    handleLocalStorage()
} ,[])

const handleLocalStorage = () => {
    const obj = JSON.parse(localStorage.getItem('users'))
    setUsers(obj)
}


const removeUser = index => {
    const removeLocalStorage = JSON.parse(localStorage.getItem('users')) || []
    removeLocalStorage.splice(index, 1)
    localStorage.setItem('users', JSON.stringify(removeLocalStorage))
    const removeState = [...user]
    removeState.splice(index, 1)
    setUsers(removeState)
}


const userItems = user.map(res => res)

return<>
    <div className="row">
        <>
        <table className="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Phone</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
      {userItems ? userItems.map(res => {
         return (
              <tr key={res.id}>
          <th scope="row">{res.registrationDate}</th>
          <td>{res.fullName}</td>
          <td>{res.email}</td>
          <td>{res.pass}</td>
          <td>{res.phone}</td>
          <td>{res.status}</td>
          <td>
          <button 
          type="button" 
            className="btn btn-warning"
            >
                <Link to={`/user-edit/${res.id}`} style={{textDecoration: 'none', color: 'white'}}>
                    Edit
                </Link>
            </button>
          </td>
          <td>
            <button 
            type="button" 
            className="btn btn-danger" 
            onClick={removeUser}
            >
                Delet
            </button>
          </td>
          </tr>
         )
      }) : <HomePage/>}
  </tbody>
</table>
        </>
    </div>
</>
}


