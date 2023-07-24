import { useState } from "react";
import CityTemp from "./city-weather";
import Favourite from "./favourite-city";
const weather = {
  Syd: [12, 17, 12, 13, 14, 12, 11],
  Mel: [12, 11, 12, 11, 12, 13, 14],
  Bsb: [12, 11, 12, 11, 12, 13, 20]
};

function Weather() {
  const [favCityTemp, setFavCityTemp] = useState([]);
  const [favCity, setFavCity] = useState();

  const highestTemp = Math.max(...favCityTemp);
  const lowestTemp = Math.min(...favCityTemp);

  function handleFav(name) {
    const newArr = weather[name];

    setFavCityTemp(newArr);
    setFavCity(name);
  }

  return (
    <div>
      <h2>
        <b>City Weather</b>
      </h2>
      <CityTemp weather={weather} handleFav={handleFav} />
      <hr />
      <h3>Fav City</h3>
      <h4>{favCity}</h4>
      <Favourite favCityTemp={favCityTemp} />
      {favCityTemp.length >= 1 ? (
        <div>
          <strong>Hottest Temp:{highestTemp}F</strong>
          <br />
          <strong>Lowest Temp:{lowestTemp}F</strong>
        </div>
      ) : (
        // for ternary operator the other parent after ? should be a
        //single component so we wrapped it in div to make it a single component
        "Please add your fav city"
      )}
    </div>
  );
}
export default Weather;
