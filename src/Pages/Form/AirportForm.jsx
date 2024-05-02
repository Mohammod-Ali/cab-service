import { useState } from "react";
import "./form.css";

const AirportForm = () => {
  const [fromAirport, setFromAirport] = useState(true);

  const handleFromAirportData = (event) => {
    event.preventDefault();
    const customer = event.target.customer.value;
    const cityName = event.target.city.value;
    const airportName = event.target.airport.value;
    const dropAddress = event.target.address.value;
    const pickUpDate = event.target.date.value;
    const pickUpTime = event.target.time.value;
    const cabType = event.target.type.value;
    const passengerName = event.target.name.value;
    const passengerEmail = event.target.email.value;
    const contactNumber = event.target.number.value;

    console.log(
      customer,
      cityName,
      airportName,
      dropAddress,
      pickUpDate,
      pickUpTime,
      cabType,
      passengerName,
      passengerEmail,
      contactNumber
    );
  };

  const handleToTheAirportData = (event) => {
    event.preventDefault();
    const customer = event.target.customer.value;
    const cityName = event.target.city.value;
    const airportName = event.target.airport.value;
    const pickUpAddress = event.target.address.value;
    const pickUpDate = event.target.date.value;
    const pickUpTime = event.target.time.value;
    const cabType = event.target.type.value;
    const passengerName = event.target.name.value;
    const passengerEmail = event.target.email.value;
    const contactNumber = event.target.number.value;

    console.log(customer, cityName, airportName, pickUpAddress, pickUpDate, pickUpTime, cabType, passengerName, passengerEmail, contactNumber)
  };

  return (
    <div>
      <div className="form-btn-container">
        <button
          className={`form-btn ${fromAirport && "bg-color"}`}
          onClick={() => setFromAirport(true)}
        >
          From the airport
        </button>
        <button
          className={`form-btn ${fromAirport === false && "bg-color"}`}
          onClick={() => setFromAirport(false)}
        >
          To the airport
        </button>
      </div>

      {fromAirport ? (
        <form
          onSubmit={handleFromAirportData}
          className="form-container"
          action=""
        >
          <div className="form-row">
            <label htmlFor="customer">Select Customer</label>
            <input
              type="text"
              name="customer"
              id=""
              placeholder="Select your customer"
            />
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="city">Select City</label>
              <input type="text" name="city" id="" placeholder="City Name " />
            </div>
            <div className="row-item">
              <label htmlFor="airport ">Select Airport</label>
              <input
                type="text"
                name="airport"
                id=""
                placeholder="Airport Name"
              />
            </div>
            <div className="row-item">
              <label htmlFor="address">Drop Address</label>
              <input
                type="text"
                name="address"
                id=""
                placeholder="Enter drop location"
              />
            </div>
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="date">Pick Up Date</label>
              <input
                type="date"
                name="date"
                id=""
                placeholder="Select pick up date"
              />
            </div>
            <div className="row-item">
              <label htmlFor="date">Pick Up Time</label>
              <input
                type="time"
                name="time"
                id=""
                placeholder="Select pick up time"
              />
            </div>
            <div className="row-item">
              <label htmlFor="type">Cab Type</label>
              <input
                type="text"
                name="type"
                id=""
                placeholder="Select cab type"
              />
            </div>
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="name">Passenger Details</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Passenger name"
              />
            </div>
            <div className="row-item">
              <label htmlFor="email">Passenger E-mail</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Passenger E-mail"
              />
            </div>
            <div className="row-item">
              <label htmlFor="number">Passenger contact number</label>
              <input
                type="number"
                name="number"
                id=""
                placeholder="Passenger contact number"
              />
            </div>
          </div>

          <input type="submit" value="Create Booking" />
        </form>
      ) : (
        <form
          onSubmit={handleToTheAirportData}
          className="form-container"
          action=""
        >
          <div className="form-row">
            <label htmlFor="customer">Select Customer</label>
            <input
              type="text"
              name="customer"
              id=""
              placeholder="Select your customer"
            />
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="city">Select City</label>
              <input type="text" name="city" id="" placeholder="City Name " />
            </div>
            <div className="row-item">
              <label htmlFor="airport ">Select Airport</label>
              <input
                type="text"
                name="airport"
                id=""
                placeholder="Airport Name"
              />
            </div>
            <div className="row-item">
              <label htmlFor="address">Pickup Address</label>
              <input
                type="text"
                name="address"
                id=""
                placeholder="Enter pick up location"
              />
            </div>
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="date">Pick Up Date</label>
              <input
                type="date"
                name="date"
                id=""
                placeholder="Select pick up date"
              />
            </div>
            <div className="row-item">
              <label htmlFor="date">Pick Up Time</label>
              <input
                type="time"
                name="time"
                id=""
                placeholder="Select pick up time"
              />
            </div>
            <div className="row-item">
              <label htmlFor="type">Cab Type</label>
              <input
                type="text"
                name="type"
                id=""
                placeholder="Select cab type"
              />
            </div>
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="name">Passenger Details</label>
              <input
                type="text"
                name="name"
                id=""
                placeholder="Passenger name"
              />
            </div>
            <div className="row-item">
              <label htmlFor="email">Passenger E-mail</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Passenger E-mail"
              />
            </div>
            <div className="row-item">
              <label htmlFor="number">Passenger contact number</label>
              <input
                type="number"
                name="number"
                id=""
                placeholder="Passenger contact number"
              />
            </div>
          </div>

          <input type="submit" value="Create Booking" />
        </form>
      )}
    </div>
  );
};

export default AirportForm;
