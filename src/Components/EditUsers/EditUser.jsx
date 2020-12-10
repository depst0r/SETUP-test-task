import React, { useParams } from 'react'
import { Link } from 'react-router-dom'

export const EditUsers = () => {;

    return<>
        <div className="row">
            <form>
            <fieldset disabled>
            <div className="form-group">
                <label for="exampleInputEmail1">Full Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            </fieldset>
            <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Phone</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
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
    </>
}