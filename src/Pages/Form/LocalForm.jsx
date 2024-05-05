import "./form.css";

const LocalForm = () => {
  const handleLocalFormData = (event) => {
    event.preventDefault();
    const customer = event.target.customer.value;
    const location = event.target.location.value;
    const pickUpDate = event.target.date.value;
    const pickUpTime = event.target.time.value;
    const hourlyPackageName = event.target.Package.value;
    const cabType = event.target.type.value;
    const passengerName = event.target.name.value;
    const passengerEmail = event.target.email.value;
    const contactNumber = event.target.number.value;

    console.log(
      customer,
      location,
      pickUpDate,
      pickUpTime,
      hourlyPackageName,
      cabType,
      passengerName,
      passengerEmail,
      contactNumber
    );
    alert("booking confirmed");
  };
  return (
    <div>
      <form onSubmit={handleLocalFormData} className="form-container" action="">
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
              name="location"
              id=""
              placeholder="Enter pick up location"
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
          <div className="row-item">
            <label htmlFor="time">Pick Up Time</label>
            <input
              type="time"
              name="time"
              id=""
              placeholder="Select pick up time"
            />
          </div>
        </div>

        <div className="form-row-item">
          <div className="row-item">
            <label htmlFor="Package">Hourly Package</label>
            <input
              type="text"
              name="Package"
              id=""
              placeholder="Select Package"
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
            <input type="text" name="name" id="" placeholder="Passenger name" />
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
    </div>
  );
};

export default LocalForm;
