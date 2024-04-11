import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_API } from '../../constant';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const { name, email, password } = formData;

  const createUser = async (userData) => {
    try {
      const { data } = await axios.post(`${BASE_API}/register`, userData)
      const { token } = data
      localStorage.setItem('token', token)
      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    createUser(formData)
    setFormData({ name: '', email: '', password: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className='w-96 border p-5'>
      <h2 className='text-center text-3xl font-semibold mb-3'>Регистрация</h2>
      <div className='flex flex-col gap-3 mb-4'>
        <input name='name' value={name} onChange={handleChange} className='py-1 px-2 outline-gray-400 border rounded' type="text" placeholder='Введите Имя' />
        <input name='email' value={email} onChange={handleChange} className='py-1 px-2 outline-gray-400 border rounded' type="email" placeholder='Введите E-mail' />
        <input name='password' value={password} onChange={handleChange} className='py-1 px-2 outline-gray-400 border rounded' type="password" placeholder='Введите пароль' />
      </div>
      <button className='w-full bg-slate-500 text-white py-1 rounded hover:bg-slate-600 transition'>Зарегистрироваться</button>
    </form>
  )
}

export default Register