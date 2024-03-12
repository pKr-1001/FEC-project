import { useState, useEffect, useContext } from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import { imageContext } from './imageContext';

// Main Component 
const Main = () => {
    const imageArr = useContext(imageContext);

   // images array containing the images we will display
    //const images = [pic1, pic2]

    const [currentQuantity, setCurrentQuantity] = useState(1) // Create and set the initial state for the current quantity
    const [currentPrice, setCurrentPrice] = useState(36); // Create and set the initial state for the current price 
    const [mugData, setMugData] = useState({}); // Create and set the initial state for the mug data
    const [activeIndex, setActiveIndex] = useState(0); // Tracks the active slide index
    
  
    // Fetch data when the component mounts
    useEffect(() => {
      fetch("https://fec-project-tjyl.onrender.com/mugs/1")  // Fetch data from endpoint
      .then((response) => response.json()) // if fetch was successful, then respond with json formatted data
      .then((data) => { // And return an object with key/value pairs. The values being the data. 
        setMugData({
          mugName: data.mug_name,
          mugDescription1: data.mug_description_1,
          mugDescription2: data.mug_description_2,
          mugShipping: data.mug_shipping,
        });
      })
      .catch((error) => { // If fetch was unsuccessful 
        console.error("Error fetching mugs:", error); // Log out error 
        throw error; // throw error
      }); 
    }, []);

    // Directly set activeIndex for navigation
    const goToFirstSlide = () => {
      setActiveIndex(0); // Always go to the first slide
    };

    const goToSecondSlide = () => {
      setActiveIndex(1); // Always go to the second slide
    };

    // Function to increase quantity 
    const increaseQuantity = () => {
        const newQuantity = currentQuantity + 1; // Increase the current quantity by one and store the sum in a const 
        setCurrentQuantity(newQuantity); // Set the current quantity to the new quantity 
        setCurrentPrice(newQuantity * 36); // Set the current price to the new quantity multiplied by the individual price 
    }

    // Function to decrease quantity
    const decreaseQuantity = () => {
        const newQuantity = Math.max(1, currentQuantity - 1); // Decrease the current quantity by one and store the difference in a const. Also, ensure that the new quantity cannot be less than 1.
        setCurrentQuantity(newQuantity); // Set the current quantity to the new quantity 
        setCurrentPrice(newQuantity * 36); // Set the current price to the new quantity multiplied by the individual price 
    }

    // Function that handles the input
    const handleInputChange = (event) => {
        const newQuantity = Math.max(0, parseInt(event.target.value, 10) || 0); // Parse the input into an int and provide a fallback if no int is inputted. Also, ensure that the new quantity cannot be less than 0.
        setCurrentQuantity(newQuantity); // Set the current quantity to the new quantity 
        setCurrentPrice(newQuantity * 36); // Set the current price to the new quantity multiplied by the individual price 

    }


return (
<>
<div className="main-component">
    <div className='row'>
        <div className='col-sm-1'></div>
        <div className='col-sm-6'>
            <div className="carousel-container">
                <Carousel activeIndex={activeIndex} onSelect={(selectedIndex, e) => setActiveIndex(selectedIndex)} indicators={false}>
                    {imageArr.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                {activeIndex === 1 && <button className="nav-button prev" onClick={goToFirstSlide}>{'<---'}</button>}
                {activeIndex === 0 && <button className="nav-button next" onClick={goToSecondSlide}>{'--->'}</button>}
            </div>
            <div className="row col-sm-10 text-center">
                <p>
                    <span className='one' style={{ opacity: activeIndex === 1 ? 0.5 : 1 }}>01 </span>
                    <span className='two' style={{ opacity: activeIndex === 0 ? 0.5 : 1 }}> 02</span>
                </p>
            </div>
        </div>
        <div className='col-sm-1'></div>
        <div className='product-info col-sm-3'>
            <br/><br/><br/><br/><br/>
            <h1>{mugData.mugName}</h1>
            <p>{mugData.mugDescription1}</p>
            <p>{mugData.mugDescription2}</p>
            <p>{mugData.mugShipping}</p>
            <div className='row'>
                <div className='quantity-selector col-sm-4'>
                    <div className="input-group mb-3 test">
                        <div className="input-group-prepend">
                            <button className="btn btn-integrated decreaser" type="button" onClick={decreaseQuantity}>-</button>
                        </div>
                        <input className="form-control form-control-integrated text-center" value={currentQuantity} maxLength="3" onChange={handleInputChange} />
                        <div className="input-group-append">
                            <button className="btn btn-integrated increaser" type="button" onClick={increaseQuantity}>+</button>
                        </div>
                    </div>
                </div>
                <div className='add-to-cart col-sm-8'>
                    <button className='btn dark'>ADD TO CART | ${currentPrice}</button>
                </div>
            </div>
        </div>
        <div className='col-sm-1'></div>
    </div>
</div>
</>
)
}

export default Main;
