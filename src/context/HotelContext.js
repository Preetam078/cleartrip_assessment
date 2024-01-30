import { createContext, useEffect, useRef, useState } from "react";

export const HotelConstext = createContext();

//making hotel context for state availability..
export const HotelConstextProvider = ({children}) => {

    const [hotels, setHotels] = useState([]);
    const [favoritehotels, setFavoriteHotels] = useState(["3909110"]);
    const backendHotelData = useRef([])

    const fetchHotels =  async() => {
        const response = await fetch("https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c")
        const data = await response.json();
        if(!backendHotelData.current || backendHotelData.current !== data) {
            backendHotelData.current = data;
        }
        setHotels(backendHotelData.current);
        localStorage.setItem("hotelData", JSON.stringify(data));
    } 

    const priceBasedSort = () => {
        const sortedHotels = backendHotelData.current;
        sortedHotels.sort((a, b) => a.price - b.price); 
        setHotels(sortedHotels);
    }

    const filterHotelByName = (value) => {
        const filteredHotels = backendHotelData.current.filter((hotel) => {
            let currentHotel = hotel.name.toUpperCase();
            return currentHotel.includes(value.toUpperCase());
        });
    
        setHotels(filteredHotels);
    }

    const addFavoriteHotel = (id) => {
        setFavoriteHotels(prev => [...prev, id]);
    }

    const removeFavoriteHotel = (id) => {
        const updatedFavoriteHotels = favoritehotels.filter((hotelId) => {
            return hotelId !== id;
        })
        setFavoriteHotels(updatedFavoriteHotels);
    }

    const filterFavoriteHotel = () => {
        const updatedHotelList = backendHotelData.current.filter((hotel) => {
            return favoritehotels.includes(hotel.id);
        })
        setHotels(updatedHotelList)

    }

    useEffect(() => {
        const storedData = localStorage.getItem("hotelData");
        //Persisting Data on Refresh
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          backendHotelData.current = parsedData;
          setHotels(parsedData);
        } else {
          fetchHotels();
        }
    },[])

    return <HotelConstext.Provider value={{hotels, priceBasedSort,filterFavoriteHotel, filterHotelByName, favoritehotels, addFavoriteHotel, removeFavoriteHotel}}>{children}</HotelConstext.Provider>
}