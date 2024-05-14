import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, setStatus } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'

const Login = () => {
  const {user,status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  const dispatch = useDispatch()
 const handleLogin = (data)=>{
  dispatch(login(data))

 }

 useEffect(()=>{
  // check the status value 
  // status--> success -> navigate to login page else register page
  if(status === STATUSES.SUCCESS){
     navigate('/')
     dispatch(setStatus(null))
  }else{
    navigate("/login")
  }
 },[status])
  return (
   
  <Form type='Login' user={user} onSubmit={handleLogin} />
  )
}

export default Login