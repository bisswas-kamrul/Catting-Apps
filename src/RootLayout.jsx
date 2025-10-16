import React from 'react'
import { Outlet } from 'react-router'
import Header from './Component/Layout/Header'
import Futter from './Component/Layout/Futter'

const RootLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Futter/>
    </>
  )
}

export default RootLayout