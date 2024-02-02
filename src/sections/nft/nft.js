import React from 'react'
import './nft.css'
import NftCard from '../../components/nft_cards/nft_card'

export default function Nft() {
  return (
    <div className='nft_section'>
      <div className='container'>
        <p className='nft_title'>Top<span className='span_nft'>NFT</span></p>
        <div className='row flex-wrap nft_gap nft_margin'>
        <NftCard/> 
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <button className='collection_button mt-3'>View all</button>
        </div>
      </div>
    </div>
  )
}
