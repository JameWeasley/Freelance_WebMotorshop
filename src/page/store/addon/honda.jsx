import { useEffect } from 'react'
import Navbar from '../../shared/navbar'
import Footer from '../../shared/footer'


export default function honda() {

  // const [ category , setCategory ] = useState('')

  const setActive = (e) => {
    const select = document.querySelectorAll('.menu-select');
    select.forEach((ev) => {
      ev.classList.remove('bg-menu-active')
    })
    e.classList.add('bg-menu-active')
  }

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
              <h3>ยี่ห้อ</h3>
            </div>
            <div className="menu-select" data-name="yamaha" onClick={((e) => {
              setActive(e.currentTarget) 
            })}>
            <h4>YAMAHA</h4>
            </div>

            <div className="menu-select" data-name="Honda" onClick={((e) => {
              setActive(e.currentTarget)
            })}>
            <h4>HONDA</h4>
            </div>

            <div className="menu-select" data-name="kawasaki" onClick={((e) => {
              setActive(e.currentTarget)
            })}>
            <h4>KAWASAKI</h4>
            </div>
          </div>

          <div className="col-md-9 text-white">
            <div className="head-info" style={{ margin: '10px' }}>
              Honda
            </div>
            <div className="product-list">
              <div className="row">
                <div className="product-blog col-sm-12 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>

                <div className="product-blog col-sm-12 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>

                <div className="product-blog col-sm-12 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
                  <div className="img-pr">
                    <img src="honda_1.jpg" alt="" width="100%" />
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aperiam.</p>
                  <p>2900 บาท</p>
                  <button className="btn btn-dark w-100">เพิ่มลงตะกร้า</button>
                </div>

                <div className="product-blog col-sm-12 col-md-4 col-lg-3" style={{ background: '#000000a1', borderRadius: '10px', padding: '5px' }}>
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
