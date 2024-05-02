import { useState } from "react";
import "./form.css";

const OutstationForm = () => {
  const [roundTrip, setRoundTrip] = useState(true);
//   const [oneWay, setOneWay] = useState(false);

const handleRoundTripFormData = event => {
  event.preventDefault()
  const customer = event.target.customer.value;
  const pickUpLocation = event.target.pickUpLocation.value;
  const dropOffLocation = event.target.dropOffLocation.value;
  const fromDate = event.target.fromDate.value;
  const toDate = event.target.toDate.value;
  const pickUpTime = event.target.time.value;
  const cabType = event.target.type.value;
  const passengerName = event.target.name.value;
  const passengerEmail = event.target.email.value;
  const contactNumber = event.target.number.value;
 
  console.log(customer, pickUpLocation, dropOffLocation, fromDate, toDate, pickUpTime, cabType, passengerName, passengerEmail, contactNumber )
}

const handleOneWayFormData = event => {
  event.preventDefault()
  const customer = event.target.customer.value;
  const pickUpLocation = event.target.pickUpLocation.value;
  const dropOffLocation = event.target.dropOffLocation.value;
  const pickUpDate = event.target.date.value;
  const pickUpTime = event.target.time.value;
  const cabType = event.target.type.value;
  const passengerName = event.target.name.value;
  const passengerEmail = event.target.email.value;
  const contactNumber = event.target.number.value;
  console.log(customer, pickUpLocation, dropOffLocation, pickUpDate, pickUpTime, cabType, passengerName, passengerEmail, contactNumber)
}

  return (
    <div>
      <div className="form-btn-container">
      <button className={`form-btn ${(roundTrip === false) && 'bg-color' }`} onClick={() => setRoundTrip(false)}>One Way</button>
      <button className={`form-btn ${roundTrip &&'bg-color' }`} onClick={() => setRoundTrip(true)}>Round Trip </button>
      </div>

      {/* Outstation one way form start here */}
      {roundTrip ? (
        <form onSubmit={handleRoundTripFormData} className="form-container" action="">
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
              <label htmlFor="location">Pick Up Location</label>
              <input
                type="text"
                name="pickUpLocation"
                id=""
                placeholder="Enter pick up location"
              />
            </div>
            <div className="row-item">
              <label htmlFor="location ">Drop Off Location</label>
              <input
                type="text"
                name="dropOffLocation"
                id=""
                placeholder="Select drop off location"
              />
            </div>
            <div className="row-item">
              <label htmlFor="date">From Date</label>
              <input
                type="date"
                name="fromDate"
                id=""
                placeholder="Select pick up date"
              />
            </div>
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="date">To Date </label>
              <input
                type="date"
                name="toDate"
                id=""
                placeholder="Select pick up date"
              />
            </div>
            <div className="row-item">
              <label htmlFor="time">Pick Up Time</label>
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
      /* Outstation one way form end here */

      ) : (

        /* Outstation Round trip start here */
        <form onSubmit={handleOneWayFormData} className="form-container" action="">
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
              <label htmlFor="location">Pick Up Location</label>
              <input
                type="text"
                name="pickUpLocation"
                id=""
                placeholder="Enter pick up location"
              />
            </div>
            <div className="row-item">
              <label htmlFor="location ">Drop Off Location</label>
              <input
                type="text"
                name="dropOffLocation"
                id=""
                placeholder="Select drop off location"
              />
            </div>
            <div className="row-item">
              <label htmlFor="date">Pick Up Date</label>
              <input
                type="date"
                name="date"
                id=""
                placeholder="Select pick up date"
              />
            </div>
          </div>

          <div className="form-row-item">
            <div className="row-item">
              <label htmlFor="time">Pick Up Time</label>
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
        /* Outstation Round trip end here */
      )}


      

      
    </div>
  );
};

export default OutstationForm;
