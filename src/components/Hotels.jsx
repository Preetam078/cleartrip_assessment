import React from 'react'
import { useHotel } from '../hooks/useHotel'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Hotels = () => {

    const {hotels, favoritehotels, addFavoriteHotel, removeFavoriteHotel} = useHotel();
  return (
    <section>
        {
            hotels.map((hotel) => (
                <div className='hotel__wrapper' key={hotel.id}>
                    <img src={hotel.image} alt={hotel.name}/>
                    <h3>{hotel.name}</h3>
                    <span>${hotel.price}</span>
                    {
                        favoritehotels.includes(hotel.id) ?<FaHeart width={50} height={50} className='fav__icon' style={{color:"red",fontSize:"29px"}} onClick={() => removeFavoriteHotel(hotel.id)}/>
                        : <CiHeart width={50} height={50} className='fav__icon' style={{fontSize:"30px"}} onClick={() => addFavoriteHotel(hotel.id)}/>
                    }
                    </div>
            ))
        }
    </section>
  )
}

export default Hotels