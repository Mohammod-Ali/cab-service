import "./TripType.css";
import LocalCart from "../Cart/LocalCart";
import OutstationCart from "../Cart/OutstationCart";
import AirportCart from "../Cart/AirportCart";
import { useState } from "react";
import AirportForm from "../Form/AirportForm";
import OutstationForm from "../Form/OutstationForm";
import LocalForm from "../Form/LocalForm";

const TripType = () => {
  const [localForm, setLocalForm] = useState(true);
  const [outstationForm, setOutstationForm] = useState(false);
  const [airportForm, setAirportForm] = useState(false);

  const local = () => {
    setLocalForm(true);
    setOutstationForm(false);
    setAirportForm(false);
  };
  const outstation = () => {
    setLocalForm(false);
    setOutstationForm(true);
    setAirportForm(false);
  };
  const airport = () => {
    setLocalForm(false);
    setOutstationForm(false);
    setAirportForm(true);
  };

  return (
    <div className="container">
      <div className="box-shadow">
        <div className="trip-type-btn">
          <h2>Trip Type: </h2>
          <button className={`${localForm && 'btn-bg-clr'}`} onClick={() => local()}>Local</button>
          <button className={`${outstationForm && 'btn-bg-clr'}`} onClick={() => outstation()}>Outstation</button>
          <button className={`${airportForm && 'btn-bg-clr'}`} onClick={() => airport()}>Airport</button>
        </div>
        {/* form start  */}
        {localForm ? <LocalForm></LocalForm> : ""}
        {outstationForm ? <OutstationForm></OutstationForm> : ""}
        {airportForm ? <AirportForm></AirportForm> : ""}
        {/* form end */}
      </div>
      {/* side cart start here */}
      <div className="cart">
        {
          localForm && <LocalCart></LocalCart>
        }
        {
          outstationForm && <OutstationCart></OutstationCart>

        }
        {
          airportForm && <AirportCart></AirportCart>
        }
        
        
      </div>
    </div>
  );
};

export default TripType;
