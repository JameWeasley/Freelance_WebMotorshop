import React from 'react'
import Navbar from '../../shared/navbar'
import Footer from '../../shared/footer'


export default function honda() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 side-menu text-white">
            <div className="type-head">
              ยี่ห้อ
              <hr />
            </div>
            <div className="title-type">
              ยี่ห้อ
            </div>
            <h2>YAMAHA</h2>
            <h2>HONDA</h2>
            <h2>KAWASAKI</h2>
          </div>

          <div className="col-md-9 text-white">
            <div className="head-info" style={{ margin: '10px' }}>
              Honda
            </div>
            <div className="product-list">
              <div className="row">
                <div className="product-blog col-sm-6 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>

                <div className="product-blog col-sm-6 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>

                <div className="product-blog col-sm-6 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>

                <div className="product-blog col-sm-6 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}
