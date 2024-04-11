import axios from 'axios';
import React, { useState } from 'react'
import { BASE_API } from '../../constant';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()

  const { email, password } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const loginUser = async (userData) => {
    try {
      const { data } = await axios.post(`${BASE_API}/auth`, userData)
      const { token } = data
      localStorage.setItem('token', token)
      navigate('/home')
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='w-96 border p-5'>
      <h2 className='text-center text-3xl font-semibold mb-3'>Вход</h2>
      <div className='flex flex-col gap-3 mb-4'>
        <input name='email' value={email} onChange={handleChange} className='py-1 px-2 outline-gray-400 border rounded' type="email" placeholder='Введите E-mail' />
        <input name='password' value={password} onChange={handleChange} className='py-1 px-2 outline-gray-400 border rounded' type="password" placeholder='Введите пароль' />
      </div>
      <button className='w-full bg-slate-500 text-white py-1 rounded hover:bg-slate-600 transition'>Войти</button>
    </form>
  )
}

export default Login