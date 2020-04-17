import React from 'react';

const Car = props => {
    return (
        <div style={{backgroundColor: 'white'}} className="box">
            <h3>{props.car.price}</h3>
            <h3>{props.car.name}</h3>
            <img src={props.car.image} alt='a car'/>
            <button className="button" onClick={() => props.selectCar(props.car)}>Select</button>
        </div>
    );
};

export default Car;
