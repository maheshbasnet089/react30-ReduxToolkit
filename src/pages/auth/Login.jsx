import React from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'

const Login = () => {
  const {user,status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
 const handleLogin = (data)=>{
  dispatch(login(data))
  // check the status value 
  // status--> success -> navigate to login page else register page
  if(status === STATUSES.SUCCESS){
    return navigate('/')
  }else{
   return navigate("/login")
  }
  
 }
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin} />
  )
}

export default Login