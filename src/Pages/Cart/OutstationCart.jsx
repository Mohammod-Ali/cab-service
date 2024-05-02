import "./Cart.css";

const OutstationCart = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <p className="cart-header">Fare Details</p>
        {/* cart details start here */}
        <div>
          <div className="dFlex">
            <p>Ride Estimate</p>
            <p>Rs. {"00.00"}</p>
          </div>
          <hr />
          <div className="dFlex">
            <p>Included KM</p>
            <p>{"0"} KM</p>
          </div>
          <div className="dFlex">
            <p>Extra fare/Km</p>
            <p>RS. {"00.00"}</p>
          </div>   
          <div className="dFlex">
            <p>Driver charges</p>
            <p>Rs. {"00.00"}</p>
          </div>
          <div className="dFlex">
            <p>Night charges</p>
            <p>Rs. {"00.00"}</p>
          </div>
        </div>

        {/* cart details end here */}

        <button className="cart-btn">Inclusions</button>
        <div>
          <p className="cart-text-bar">
            {300}km @Rs.{10}/km<br /> 
            Driver Allowance Rs.{300}/day X 1 day<br /> 
            GST {`(5%)`}
          </p>
        </div>
        <button className="cart-btn">Exclusions</button>
        <p className="cart-text-bar">
          Pay ₹{11}/km after {300}km <br />
          Driver Allowance Rs.{300}/day X 1 day <br />
          Toll / State tax / Parking <br />
          <br />
          Toll / State tax / Parking
        </p>
      </div>
    </div>
  );
};

export default OutstationCart;
