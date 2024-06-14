import React from 'react'
import MyNavbar from '../components/navbar/MyNavbar'
import { Outlet } from 'react-router-dom'
import { MyFooter } from '../components/footer/MyFooter'

export function SharedLayout() {
  return (
   <>
      <MyNavbar />
      <Outlet />
      <MyFooter />
   </>
  )
}
