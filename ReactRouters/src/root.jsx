import React from 'react'
import Header from './componenets/header/Header'
import Footer from './componenets/Footer/Footer'
import {Outlet} from 'react-router-dom'

const root = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default root