import React from 'react'
import { Footer } from '../components/Navigation/Footer'
import { NavBar } from '../components/Navigation/NavBar'

export const Layout = (props) => {
  return (
    <>
      <NavBar/>
      {props.children}
      <Footer/>
    </>
  )
}
