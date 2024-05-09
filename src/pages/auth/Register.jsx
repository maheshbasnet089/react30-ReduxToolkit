import React from 'react'
import Form from './components/form/Form'
import { register } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
 const handleRegister = (data)=>{
  dispatch(register(data))
 }
  return (
    <Form type='Register' onSubmit={handleRegister}/>
  )
}

export default Register