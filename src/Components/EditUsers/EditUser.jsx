import React, { useState ,useEffect } from 'react'
import './EditUsers.css'
import { Link, useParams } from 'react-router-dom'

export const EditUsers = () => {
    const { id } = useParams('')
    const [userEdit, setUserEdit] = useState({})

    useEffect(() => {
        handleLocalStorage()
    }, [])

    const handleLocalStorage = () => {
        const obj = JSON.parse(localStorage.getItem('users'))
        const edit = obj.find(item => item.id == id)
        setUserEdit(edit)
    }

    const { fullName, email, pass, phone, status } = userEdit

    return<>    
        <div className="row">
            <div className="form">
            <form>
            <fieldset disabled>
            <div className="form-group">
                <label for="exampleInputFullName">Full Name</label>
                <input type="email" class="form-control" id="exampleInputFullName" aria-describedby="emailHelp" value={fullName}/>
            </div>
            </fieldset>
            <div className="form-group">
                <label for="exampleInputEmail">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail" value={email}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="text" class="form-control" id="exampleInputPassword" value={pass}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPhone">Phone</label>
                <input type="phone" class="form-control" id="exampleInputPhone" value={phone}/>
            </div>
            <fieldset disabled>
            <select 
            className="form-control form-control-lg"
            >
                <option>{status}</option>
            </select>
            </fieldset>
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