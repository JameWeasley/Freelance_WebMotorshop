import React from 'react'
import Navbar from '../shared/navbar'
import Head from './addon/head'
import Body from './addon/body'
import Footer from '../shared/footer'

export default function home() {
  return (
    <>
        <Navbar/>
        <Head/>
        <Body/>
        <Footer/>
    </>
  )
}
