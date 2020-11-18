import React from 'react';
import { connect } from 'react-redux';
//Renders unselected display field
const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
//Image API
  const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;
//Selected active city display field, info comes from reducers
  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <p>{props.activeCity.address}</p>
      <img src={url} width="100%" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
