import { Header } from './Components/Header/Header'
import { HomePage } from './Components/HomePage/HomePage'
import { AddUsers } from './Components/User/AddUsers'
import { UserList } from './Components/User/UserList'
import { EditUsers } from './Components/EditUsers/EditUser'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="container">
      <Header/>
      <Route path='/' component={ HomePage } />
      <Route path='/add-users' component={ AddUsers } />
      <Route path='/users-list' component={ UserList } />
      <Route path='/user-edit' component={ EditUsers } />
    </div> 
  )
}

export default App;
