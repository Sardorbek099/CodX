import React from 'react'
import './faq_col.css'

let faq_col = [
    {
        title: 'Donec posuere massa nec arcu scelerisque, blandit mattis justo blandit',
        imageUrl: './faq/faq.png'
    },
    {
        title: 'Quisque at justo semper, faucibus eros sit amet, scelerisque lorem.',
        imageUrl: './faq/faq.png'
    },
    {
        title: 'Nulla eget justo at eros varius consequat.',
        imageUrl: './faq/faq.png'
    },
    {
        title: 'Vivamus non nibh quis massa laoreet semper et eu quam',
        imageUrl: './faq/faq.png'
    },
    {
        title: 'Morbi quis nisi tempus, mollis turpis ut, mollis massa.',
        imageUrl: './faq/faq.png'
    }
]

export default function FaqCol() {
    return (
        faq_col.map(item => {
            return (
                <div className='faq_col'>
                    <p className='faq_name'>{item.title}</p>
                    <img src={item.imageUrl} alt='faq'/>
                </div>
            )
        })
    )
}
