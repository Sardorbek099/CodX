import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero_section'>
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <p className='hero_description'>EXTRAORDINARY NFTs</p>
                    <p className='hero_title'>
                    Change your <br/>Digital Experience
                    </p>
                    <p className='hero_text'>Suspendisse sem neque, auctor a elementum ut, <br/>varius vel leo. Donec diam arcu, porta et magna at</p>
                </div>
                <div className='col-6 p-absolute'>
                <img className='hero_img' src='hero_img.png' alt='hero'/>
                </div>
            </div>
        </div>
    </div>
  )
}
