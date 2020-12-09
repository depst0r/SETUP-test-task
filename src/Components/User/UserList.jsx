import React, { useState, useEffect } from 'react'
import { HomePage } from '../Home/HomePage'
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

const editUser = index => {
    const edit = JSON.parse(localStorage.getItem('users'))
    console.log(index);
}

const userItems = user.map(res => res)

return<>
    <div className="row">
        <>
        <table class="table table-hover table-dark">
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
              <tr>
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
            onClick={editUser} 
            >
                <Link to='/user-edit' style={{textDecoration: 'none', color: 'white'}}>
                    Edit
                </Link>
            </button>
          </td>
          <td>
            <button type="button" 
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


