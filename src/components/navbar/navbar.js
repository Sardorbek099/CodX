import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
        <div className='navbar_section'>
            <div className='d-flex'>
                <div className='forLogo'>
                    <img src='logo.png' alt='logo' />
                </div>
                <ul className='navbar'>
                    <li className='navbar_item'>
                        <a className='navbar_item_link' href='https://youtube.com'>About us</a>
                    </li>
                    <li className='navbar_item'>
                        <a className='navbar_item_link' href='https://youtube.com'>NFTs</a>
                    </li>
                    <li className='navbar_item'>
                        <a className='navbar_item_link' href='https://youtube.com'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='d-flex social_media'>
                <img src='twitter.png' alt='twitter' />
                <img src='instagram.png' alt='instagram' />
                <img src='facebook.png' alt='facebook' />
                <button className='navbar_button'>View on OpenSea</button>
            </div>

        </div>
    )
}
