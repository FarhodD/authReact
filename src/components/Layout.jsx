import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className='flex justify-center py-28'>
        <Outlet />
      </main>
    </>
  )
}

export default Layout