import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer_section'>
        <div className='container'>
            <div className='row footer_margin flex-wrap'>
                <div className='footer_col1'>
                    <img src='./footer/footer_logo.png' alt='logo'/>
                    <p className='footer_community'>Join the community</p>
                    <div className='d-flex footer_social_media'>
                        <img src='./footer/footer2.png'  alt='twitter'/>
                        <img src='./footer/footer3.png'  alt='insta'/>
                        <img src='./footer/footer4.png'  alt='facebook'/>
                    </div>
                </div>
                <div className='footer_col2'>
                    <p className='footer_col2_title'>Site</p>
                    <ul className='footer_navbar'>
                        <li className='footer_navbar_item'>
                            <a className='footer_navbar_item_link' href='https://youtube.com'>About us</a>
                        </li>
                        <li className='footer_navbar_item'>
                            <a className='footer_navbar_item_link' href='https://youtube.com'>NFTs</a>
                        </li>
                        <li className='footer_navbar_item'>
                            <a className='footer_navbar_item_link' href='https://youtube.com'>Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='footer_col3'>
                    <p className='footer_col2_title'>Utility</p>
                    <ul className='footer_navbar'>
                        <li className='footer_navbar_item'>
                            <a className='footer_navbar_item_link' href='https://youtube.com'>Style guide</a>
                        </li>
                        <li className='footer_navbar_item'>
                            <a className='footer_navbar_item_link' href='https://youtube.com'>Lincensing</a>
                        </li>
                        <li className='footer_navbar_item'>
                            <a className='footer_navbar_item_link' href='https://youtube.com'>404</a>
                        </li>
                    </ul>
                </div>
                <div className='footer_col4'>
                    <p className='footer_col4_title'>Stay in the loop</p>
                    <p className='footer_col4_description'>Suspendisse sem neque, auctor a elementum ut,<br/> varius vel leo. Donec diam arcu, porta et magna at</p>
                    <div className='form d-flex'>
                        <input className='footer_input' placeholder='Your email address'/>
                        <button className='fotter_button'>Sign up</button>
                    </div>
                </div>
                <div className='d-flex text_contents'>
                    <p className='footer_info'>© 2022 All rights reserved.</p>
                    <p className='footer_creator'>Created By <span className='footer_span1'>Udesly</span><span className='footer_span2'>Powered By</span><span className='footer_span3'>Webflow</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
