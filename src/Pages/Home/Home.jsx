import React from 'react';
import './Home.css'
import car from '../../assets/seodata-image 1.png'
import handLogo from '../../assets/hand-holding-up-a-sprout-svgrepo-com 1.png'
import drivingLogo from '../../assets/driving.png'
import background from '../../assets/BG Banner.png'


const Home = () => {
    return (
        <>
        
         <div>
            <h1 className='heading text-clr'>​India's Leading One-Way Inter-City Cab Service Provider</h1>
            <div className='dFlex'>
                <div >
                    <img src={car} alt="car" />
                </div>
                <div className='card'> 
                    <img src={handLogo} alt="handLogo" />
                    <h5 className='text-clr'>Return Fare, Not Fair!</h5>
                    <p>Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.</p>
                </div>
                <div className='card'> 
                    <img src={drivingLogo} alt="drivingLogo" />
                    <h5 className='text-clr'>Return Fare, Not Fair!</h5>
                    <p>Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your one-way travel.</p>
                </div>
            </div>
        </div>

        <div className='oneWaySection' style={{ backgroundImage: `url(${background})` }}>
            <h2>Why choose AC Bus or AC Train for your One-way Journey?</h2>
            <p>Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly</p>
            <p>read More....</p>
        </div>

        {/* Why choose one way cab section */}
        <div>
            <h2 className='heading text-clr'>Why Choose Oneway Cab?</h2>
            <div className='dFlex'>
            <div>
                <p>Instant Booking & Confirmation</p>
                <p>Confirmed Booking Immediately</p>
                <p>No Return Fare for One-Way Trip</p>
                <p>Clean & Professional Cab Services</p>
                <p>No Night or Luggage Charges</p>
            </div>
            <div>
                <p>Pick-up from your house</p>
                <p>Dedicated Cab just for you</p>
                <p>Drop to your desired destination</p>
                <p>Completed more than 20,000+ One-Way Trips</p>
                <p>Multiple Payment Option including Credit Card.</p>
            </div>
            </div>
        </div>

        
        </>
       
    );
};

export default Home;