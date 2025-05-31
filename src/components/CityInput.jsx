import "../styles/cityinput.css";

const CityInput = ({ cityInput, onSubmit, error }) => {
  return (
    <form className="city-input-container" onSubmit={onSubmit}>
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        className="cityInput"
        placeholder="Enter City"
        defaultValue={cityInput}
      />
      <button type="submit">Get Info</button>
      {error && <span className="error-message">{error}</span>}
    </form>
  );
};

export default CityInput;
