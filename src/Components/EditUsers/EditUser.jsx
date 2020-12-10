import React, { useState ,useEffect } from 'react'
import './EditUsers.css'
import { Link, useParams } from 'react-router-dom'

export const EditUsers = () => {
    const { id } = useParams('')
    const [userEdit, setUserEdit] = useState('')

    useEffect(() => {
        handleLocalStorage()
    }, [])

    const handleLocalStorage = () => {
        const obj = JSON.parse(localStorage.getItem('users'))
        setUserEdit(obj)
        const t = obj.map(res => res.id)
        const res = t.filter(r => r === id)
        console.log(res)
    }

    return<>
    
        <div className="row">
            <div className="form">
            <form>
            <fieldset disabled>
            <div className="form-group">
                <label for="exampleInputFullName">Full Name</label>
                <input type="email" class="form-control" id="exampleInputFullName" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            </fieldset>
            <div className="form-group">
                <label for="exampleInputEmail">Email</label>
                <input type="password" class="form-control" id="exampleInputEmail" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword" />
            </div>
            <div className="form-group">
                <label for="exampleInputPhone">Phone</label>
                <input type="password" class="form-control" id="exampleInputPhone" />
            </div>
            <select 
            className="form-control form-control-lg"
            >
                <option>Client</option>
                <option>Partner</option>
                <option>Admin</option>
            </select>
            <button 
            type="submit" 
            class="btn btn-primary m-3"
            >Save</button>
            <button 
            type="submit" 
            class="btn btn-danger"
            >
                <Link to='/users-list' style={{textDecoration: 'none', color: 'white'}}>
                Back
                </Link>
            </button>
            </form>
            </div>
        </div>
    </>
}