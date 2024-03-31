import React from 'react'
import Navbar from '../shared/navbar'


export default function honda() {
  return (
    <>
        <Navbar/>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <input type="search" />
              
            </div>
          </div>
        </div>
    </>
  )
}
