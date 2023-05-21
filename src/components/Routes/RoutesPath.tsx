
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserForm from '../UserForm/UserForm'
import LibararyTable from '../Libarary/LibararyTable'
 

const RoutesPath :React.FC = ()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path ='/' element ={<LibararyTable/>} />
        <Route path ='/userForm' element ={<UserForm/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesPath
