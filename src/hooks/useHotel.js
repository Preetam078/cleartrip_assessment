import { useContext } from "react";
import { HotelConstext } from "../context/HotelContext";

export const useHotel = () => {
    const context = useContext(HotelConstext);
    return context;
}