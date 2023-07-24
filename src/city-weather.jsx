function CityTemp({ handleFav, weather }) {
  const cityNames = Object.keys(weather);
  return (
    <ul>
      {cityNames.map((city) => (
        <li>
          <b>{city}</b>-
          <button onClick={() => handleFav(city)}>Add to Fav</button>
          <ul>
            {weather[city].map((temp) => (
              <li>{temp}F</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
export default CityTemp;
