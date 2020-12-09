import React, { useState, useEffect } from 'react'
import modules from './Users.module.css'

export const AddUsers = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [phone, setPhone] = useState('')
    const [fullName, setFullName] = useState('')
    const [status, setStatus] = useState('')
    const [arr, setArr] = useState([])

    const [emailErr, setEmailErr] = useState({})
    const [passErr, setPassErr] = useState({})
    const [phoneErr, setPhoneErr] = useState({})
    const [fullNameErr, setFullNameErr] = useState({})
    const [statusErr, setStatusErr] = useState({})

    useEffect(() => {
        const usersArr = localStorage.getItem('users') || []
        setArr(JSON.parse(usersArr))
    }, [])

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(arr))
    }, [arr])

    const handlerForm = e => {
        e.preventDefault()
        const isValidate = formValidate()
    }

    const formValidate = () => {

    }

    const onSubmit = () => {
        setArr(state => state.concat({ 
            id: Date.now(),
            registrationDate: new Date().toLocaleDateString(),
            email: email, 
            pass: pass, 
            phone: phone, 
            fullName: fullName, 
            status: status
        }))
    }


    return<>
        <div className="row">
        <form onSubmit={handlerForm} className={modules.ma}>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
            type="email" className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            value={email}
            onChange={e => setEmail(e.target.value)}
            name='email'
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            value={pass}
            onChange={e => setPass(e.target.value)}
            name='password'
            />
        </div>
        <div class="form-group">
            <label for="exampleInputPhone">Phone</label>
            <input 
            type="phone" 
            className="form-control" 
            id="exampleInputPhone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            name='phone'
            />
        </div>
        <div class="form-group">
            <label for="exampleInputUserFullName">Full Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleInputUserFullName"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            name='fullName'
            />
        </div>
        <div className="form-group">
            <label for="selected">Status</label>
            <select 
            className="form-control form-control-lg"
            value={status}
            onChange={e => setStatus(e.target.value)}
            >
                <option value=''>Select...</option>
                <option value='Client'>Client</option>
                <option value='Partner'>Partner</option>
                <option value='Admin'>Admin</option>
            </select>
        </div>
        <button 
        className="btn btn-primary"
        onClick={onSubmit}
        >Submit</button>
        </form>
        </div>
    </>
}