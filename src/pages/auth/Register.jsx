import React from 'react'
import Form from './components/form/Form'
import { register } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const {status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
 const handleRegister = (data)=>{
  dispatch(register(data))
  // check the status value 
  // status--> success -> navigate to login page else register page
  if(status === STATUSES.SUCCESS){
    return navigate('/login')
  }else{
   return navigate("/register")
  }
  
 }
  return (
    <Form type='Register' onSubmit={handleRegister}/>
  )
}

export default Register