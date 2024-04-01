import React from 'react'
import Navbar from '../shared/navbar'
import Footer from '../shared/footer'
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";

export default function contact() {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="info-contact text-center text-white mt-3">
                        <h1>J-CHARON FAIRING CONTACT US</h1>
                    </div>
                    <iframe className="mt-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.158198024957!2d100.34252609236853!3d13.70886676394647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e295e2da095cf1%3A0xa2029ef0102e84ce!2zNi8yNSDguJYuIOC5gOC4nuC4iuC4o-C5gOC4geC4qeC4oSDguYHguILguKfguIfguKvguJnguK3guIfguITguYnguLLguIfguJ7guKXguLkg4LmA4LiC4LiV4Lir4LiZ4Lit4LiH4LmB4LiC4LihIOC4geC4o-C4uOC4h-C5gOC4l-C4nuC4oeC4q-C4suC4meC4hOC4oyAxMDE2MA!5e0!3m2!1sth!2sth!4v1701401691527!5m2!1sth!2sth" frameborder="0" width="100%" height="300"></iframe>

                    <div className="box-text-detail mt-5" style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className="box-1 text-white" style={{ border: '1px solid #fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 0 2px' }}>
                            <p>อาคารที่ 6 /25 - 26 ซอยเพชรเกษม 110 ถนนเพชรเกษม แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร 10160</p>
                        </div>

                        <div className="box-2 text-white" style={{ border: '1px solid #fff', padding: '30px', borderRadius: '10px', boxShadow: '0 0 0 2px' }}>
                            <div className="icon-text" style={{ fontSize: '25px' }}>
                                <div className="icon-facebook mb-3">
                                    <FaFacebook /> : ชุดสีมอเตอร์ไซค์คุณภาพสูง ราคาปลีก ราคาส่ง จากโรงงานผู้ผลิตโดยตรง
                                </div>

                                <div className="icon-tiktok mb-3">
                                    <FaTiktok /> : @jcharon.fairing
                                </div>

                                <div className="icon-phone">
                                    <FaPhoneSquare /> : 094-569-1591
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
