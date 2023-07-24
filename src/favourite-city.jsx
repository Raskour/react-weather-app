function Favourite({ favCityTemp }) {
  return (
    <ul>
      {favCityTemp.map((temp) => (
        <li>{temp}F</li>
      ))}
    </ul>
  );
}
export default Favourite;
