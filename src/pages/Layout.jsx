import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation.jsx'

const Layout = () => {
  return (
    <>
        <Navigation />
        <main>
            <Outlet />
        </main>
      
    </>
  )
}

export default Layout
