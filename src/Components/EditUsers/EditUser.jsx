import React, { useState ,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './EditUsers.css'


export const EditUsers = () => {
    const { id } = useParams('')
    const [userEdit, setUserEdit] = useState({})


    useEffect(() => {
        handleLocalStorage()
    }, [])

    const handleLocalStorage = () => {
        const arr = JSON.parse(localStorage.getItem('users'))
        const obj = arr.find(item => item.id == id)
        setUserEdit(obj)
    }

    const handlSubmit = () => {
        const allUsersArr = JSON.parse(localStorage.getItem('users'))
        Object.assign(allUsersArr.find(item => item.id === userEdit.id), userEdit)
        localStorage.setItem('users', JSON.stringify(allUsersArr))
    }

    const onSubmite = e => {
        e.preventDefault()
    }

    const { fullName, email, pass, phone, status } = userEdit

    return<>    
        <div className="row">
            <div className="form">
            <form onSubmit={onSubmite}>
            <fieldset disabled>
            <div className="form-group">
                <label for="exampleInputFullName">Full Name</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputFullName" 
                aria-describedby="emailHelp"
                value={fullName}
                />
            </div>
            </fieldset>
            <div className="form-group">
                <label for="exampleInputEmail">Email</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail"
                onChange={e => setUserEdit({...userEdit, email: e.target.value })}
                value={email}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword">Password</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleInputPassword"
                onChange={e => setUserEdit({...userEdit, pass: e.target.value })}
                value={pass}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPhone">Phone</label>
                <input 
                type="phone" 
                className="form-control" 
                id="exampleInputPhone"
                onChange={e => setUserEdit({...userEdit, phone: e.target.value })}
                value={phone}/>
            </div>
            <fieldset disabled>
            <select 
            className="form-control form-control-lg"
            >
                <option>{status}</option>
            </select>
            </fieldset>
                <button 
                    onClick={handlSubmit}
                    className="btn btn-primary m-3"
                    >
                    <Link to='/users-list' style={{textDecoration: 'none', color: 'white'}}>
                        Save
                    </Link>
                    </button>
                    <button  
                    className="btn btn-danger"
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