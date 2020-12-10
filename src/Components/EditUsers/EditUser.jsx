import React from 'react'
import './EditUsers.css'
import { Link, useParams } from 'react-router-dom'

export const EditUsers = () => {
    const { id } = useParams('')

    console.log('id', id);
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