import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export default function body() {

  useEffect(() => {
    let splide = new Splide(".splide", {
      type: "loop",
      perMove: 1,
    });
  
    splide.mount();
  
    const handleResize = () => {
      const windowWidth = window.innerWidth;
  
      if (windowWidth < 500) {
        splide.options.perPage = 1;
      } else if (windowWidth < 768) {
        splide.options.perPage = 2;
      } else if (windowWidth < 1024) {
        splide.options.perPage = 3;
      } else {
        splide.options.perPage = 4;
      }
  
      splide.refresh(); // Refresh Splide instance แทนที่การสร้าง instance ใหม่ทุกครั้ง
    };
  
    handleResize(); // เรียกใช้ฟังก์ชัน handleResize เพื่อตั้งค่าเริ่มต้น
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
      
  
  
  

  return (
    <>
      <div className="container">
        <div className="splide text-white p-5">
          <div className="splide__track">
            <div className="splide__list  ">
              <div className="splide__slide">
                
                  <div className="product-info">
                    <div className="img-product-detail">
                      <img
                        src="https://jcharon.com/admin/productimages/22/f12b73797f1bba7e6c06f709cc1c66f1.jpg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </div>

                    <div className="detail-product">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vel?</p>
                      <p>9900 บาท</p>

                      <button className="btn btn-dark w-100">เพิ่มสินค้าลงตะกร้า</button>
                    </div>
                  </div>
              </div>

              <div className="splide__slide">
                  <div className="product-info">
                    <div className="img-product-detail">
                      <img
                        src="https://jcharon.com/admin/productimages/28/15%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99%20%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B8%B5%E2%80%8B%20HONDA%E2%80%8B%20WAVE%E2%80%8B%20110%E2%80%8Bi%20NEW%20(5).jpg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </div>

                    <div className="detail-product">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vel?</p>
                      <p>9900 บาท</p>

                      <button className="btn btn-dark w-100">เพิ่มสินค้าลงตะกร้า</button>
                    </div>
                  </div>
              </div>

              <div className="splide__slide">
                  <div className="product-info">
                    <div className="img-product-detail">
                      <img
                        src="https://jcharon.com/admin/productimages/27/15%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99%20%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B8%B5%E2%80%8B%20HONDA%E2%80%8B%20WAVE%E2%80%8B%20110%E2%80%8Bi%20NEW%20(4).jpg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </div>

                    <div className="detail-product">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vel?</p>
                      <p>9900 บาท</p>

                      <button className="btn btn-dark w-100">เพิ่มสินค้าลงตะกร้า</button>
                    </div>
                  </div>
              </div>

              <div className="splide__slide">
                  <div className="product-info">
                    <div className="img-product-detail">
                      <img
                        src="https://jcharon.com/admin/productimages/26/15%E0%B8%8A%E0%B8%B4%E0%B9%89%E0%B8%99%20%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B8%B5%E2%80%8B%20HONDA%E2%80%8B%20WAVE%E2%80%8B%20110%E2%80%8Bi%20NEW%20(3).jpg"
                        alt=""
                        width="100%"
                        height="auto"
                      />
                    </div>

                    <div className="detail-product">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vel?</p>
                      <p>9900 บาท</p>

                      <button className="btn btn-dark w-100">เพิ่มสินค้าลงตะกร้า</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}