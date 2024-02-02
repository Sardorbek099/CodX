import React from 'react'
import './collection_card.css'


let card = [
    {
        imageUrl:"./collection/collection1.png",
        title:'Collectibles'
    },
    {
        imageUrl:"./collection/collection2.png",
        title:'Art'
    },
    {
        imageUrl:"./collection/collection3.png",
        title:'Photography'
    }
]

export default function CollectionCard() {
  return (
    card.map(item=>{
        return(
            <div className='collection_col'>
                    <div className='collection_card'>
                        <img src={item.imageUrl} alt={item.title}/>
                        <p className='card_title'>{item.title}</p>
                    </div>
                </div>
        )
    })
  )
}
