import React from 'react'
import Header from '../sections/header/header'
import Products from '../sections/products/products'
import About from '../sections/about_us/about'
import Courses from '../sections/courses/courses'
import Main from '../sections/main/main'
import Collections from '../sections/collections/collections'
import Nft from '../sections/nft/nft'
import Faq from '../sections/faq/faq'
import Footer from '../components/footer/footer'

export default function HomePage() {
  return (
    <div>
    <Header/>
    <Products/>
    <About/>
    <Courses/>
    <Main/>
    <Collections/>
    <Nft/>
    <Faq/>
    <Footer/>
    </div>
  )
}





