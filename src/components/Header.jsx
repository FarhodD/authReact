import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-14 bg-slate-600 text-white flex items-center justify-end px-8 gap-5'>
      <NavLink to={'/register'}>Регистрация</NavLink>
      <NavLink to={'/login'}>Вход</NavLink>
    </header>
  )
}

export default Header