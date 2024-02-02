import React from 'react'
import './faq.css'
import FaqCol from '../../components/faq_col/faq_col'

export default function Faq() {
  return (
    <div className='faq_section'>
        <div className='container'>
            <p className='faq_title'>Faq</p>
            <div className='row flex-wrap'>
                <FaqCol/>
            </div>
        </div>
    </div>
  )
}
