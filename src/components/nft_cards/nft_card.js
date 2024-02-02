import React from 'react'
import './nft_card.css'

let nft_card = [
    {
        id: 54385,
        imageUrl: "./nft/nft1.png",
        title: "White Bear"
    },
    {
        id: 54395,
        imageUrl: "./nft/nft2.png",
        title: "Happy Luca"
    },
    {
        id: 54376,
        imageUrl: "./nft/nft3.png",
        title: "Dodo"
    },
    {
        id: 54348,
        imageUrl: "./nft/nft4.png",
        title: "Nano Nano"
    },
    {
        id: 54337,
        imageUrl: "./nft/nft5.png",
        title: "Zombie"
    },
    {
        id: 54392,
        imageUrl: "./nft/nft6.png",
        title: "Pink Devil"
    }

]

export default function NftCard() {
    return (
        nft_card.map(item => {
            return (
                <div className='nft_col'>
                    <div className='nft_card'>
                        <img src={item.imageUrl} alt='nft'/>
                        <div className='nft_card_body'>
                            <div className='card_info'>
                                <p className='nft_card_title'>{item.title}</p>
                                <p className='nft_card_text'><span className='span_id'>#</span>{item.id}</p>
                            </div>
                            <div className='card_actives'>
                                <div className='nft_password'>
                                    <img src='./nft/password.png' alt='password'/>
                                </div>
                                <div className='nft_lock'>
                                <img src='./nft/lock.png' alt='lock'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
