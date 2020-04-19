import React from 'react';
import Car from './Car';
import {selectCar} from '../actions'
import {connect} from 'react-redux';

const CarSelection = props => {

  return (
    <div className="content">
      <h1>Cars:</h1>
        {props.cars.map(car => (
        <Car key={`${car.id} + ${car.name}`} car={car} selectCar={props.selectCar}/>
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(
  mapStateToProps,
  {selectCar}
)(CarSelection);