import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import CarSelection from './components/CarSelection'
import Total from './components/Total';
import {connect} from 'react-redux';

const App = props => {
  return (
    <div className="boxes">
      <CarSelection/>
      {props.state.car.name ? (
        <div>
        <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
      </div>
      ):(<div>Please select a vehicle</div>)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);