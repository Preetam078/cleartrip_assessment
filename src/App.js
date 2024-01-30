import Hotels from "./components/Hotels";
import { useHotel } from "./hooks/useHotel";

function App() {
  const {priceBasedSort, filterHotelByName, filterFavoriteHotel} = useHotel();

  return (
    <div className="App__wrapper">
    <div className="App">
     <nav className="input__wrapper" onChange={((e)=> filterHotelByName(e.target.value))}><input type="text" placeholder="search by hotel,city"/></nav>
     <div className="navbutton__wrapper">
      <button onClick = {() => filterFavoriteHotel()}>Favorite</button>
      <button onClick={()=> priceBasedSort()}>Price</button>
      <div className="hotels__wrapper">
        <Hotels/>
      </div>
     </div>
    </div>
    </div>
  );
}

export default App;
