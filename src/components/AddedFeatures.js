import React from 'react';
import AddedFeature from './AddedFeature';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car ? (
        props.car.features ? (
            <ol type="1">
              {props.car.features.map(item => (
                <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
              ))}
            </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )
      ) : (
      <div>Please select a car</div>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(
  mapStateToProps,
  { removeFeature }
)(AddedFeatures);