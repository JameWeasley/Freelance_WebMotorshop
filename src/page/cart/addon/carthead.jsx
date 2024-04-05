import React from 'react'

export default function carthead() {
  return (
    <>
      <div className="container">
        <table class="table mt-5">
          <thead>
            <tr>
              <th className='width-cart'>ตะกร้าสินค้า</th>
              <th className='text-center'>จำนวน</th>
              <th className='text-center'>ราคารวม</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tb-flex w-100">
                <img src="https://cdn.pixabay.com/photo/2018/09/04/18/05/vespa-3654354_640.jpg" width="200" height="150" alt="" />
                <div className="item-detail-cart">
                  <p>Motorcicle shop 1</p>
                  <p>9900 บาท</p>
                  <button className='btn btn-danger'>ลบ</button>
                </div>
              </td>
              <td>
                <div className="quantity-cart">
                  <input type="text" />
                </div>
                <div className="btn-add">
                  <button className='btn btn-success btn-1'>+</button>    
                  <button className='btn btn-warning btn-1'>-</button>    
                </div>
              </td>
              <td>
                <div className="price-cart">
                  9900 บาท
                </div>
              </td>
            </tr>

            <tr>
              <td className="tb-flex w-100">
                <img src="https://cdn.pixabay.com/photo/2018/09/04/18/05/vespa-3654354_640.jpg" width="200" height="150" alt="" />
                <div className="item-detail-cart">
                  <p>Motorcicle shop 1</p>
                  <p>9900 บาท</p>
                  <button className='btn btn-danger'>ลบ</button>
                </div>
              </td>
              <td>
                <div className="quantity-cart">
                  <input type="text" />
                </div>
                <div className="btn-add">
                  <button className='btn btn-success btn-1'>+</button>    
                  <button className='btn btn-warning btn-1'>-</button>    
                </div>
              </td>
              <td>
                <div className="price-cart">
                  9900 บาท
                </div>
              </td>
            </tr>


            <tr>
              <td className="tb-flex w-100">
                <img src="https://cdn.pixabay.com/photo/2018/09/04/18/05/vespa-3654354_640.jpg" width="200" height="150" alt="" />
                <div className="item-detail-cart">
                  <p>Motorcicle shop 1</p>
                  <p>9900 บาท</p>
                  <button className='btn btn-danger'>ลบ</button>
                </div>
              </td>
              <td>
                <div className="quantity-cart">
                  <input type="text" />
                </div>
                <div className="btn-add">
                  <button className='btn btn-success btn-1'>+</button>    
                  <button className='btn btn-warning btn-1'>-</button>    
                </div>
              </td>
              <td>
                <div className="price-cart">
                  9900 บาท
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
  )
}
