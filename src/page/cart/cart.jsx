import React from 'react'
import Navbar from '../shared/navbar'
import CartHeadPage from './addon/carthead'
import CartBodyPage from './addon/cartbody'

export default function cart() {
    return (
        <>
            <Navbar />
            <CartHeadPage />
            <CartBodyPage />
        </>
    )
}
