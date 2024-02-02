import React from 'react'
import './main.css'

export default function Main() {
  return (
    <div className='main_section'>
        <div className='container'>
            <div className='row'>
                <div className='main_col'>
                    <p className='main_title'>Join Us and Discover <br/> our most precious NFT</p>
                    <p className='main_description'>Suspendisse sem neque, auctor a elementum ut, varius vel <br/> leo. Donec diam arcu, porta et magna at</p>
                    <button className='main_button'>View on OpenSea</button>
                </div>
            </div>
        </div>
        <div className='main_image p-absolute'>
                    <img src='./main/main.png' alt='nimadir' />
        </div>
    </div>
  )
}
