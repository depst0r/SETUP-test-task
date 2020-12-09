import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'



export const Header = () => {
    return<>
      <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1"></span>
      <span className="navbar-brand mb-0 h1"></span>
      <Link to='/'>
        <span className="navbar-brand mb-0 h1">Home</span>
      </Link>
      <Link to='/add-users'>
        <span className="navbar-brand  h1">Add User</span>
      </Link>
      <Link to='/users-list'>
        <span className="navbar-brand h1">User List</span>
      </Link>
        <span className="navbar-brand mb-0 h1"></span>
        <span className="navbar-brand mb-0 h1"></span>
      </nav>


    </>
}