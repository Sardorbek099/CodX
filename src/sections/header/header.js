import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Hero from './hero'
import './header.css'

export default function Header() {
  return (
    <div className='header_section'>
        <div className='container'>
        <Navbar/>
        <Hero/>
        </div>
    </div>
  )
}
