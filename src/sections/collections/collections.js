import React from 'react'
import './collections.css'
import CollectionCard from '../../components/collection_card/collection_card'

export default function Collections() {
  return (
    <div className='collection_section'>
        <div className='container'>
            <p className='collection_title'>Browse by <span className='span_collection'>Collections</span></p>
            <div className='row collection_gap'>
               <CollectionCard/>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
            <button className='collection_button'>View all</button>
            </div>
        </div>
    </div>
  )
}
