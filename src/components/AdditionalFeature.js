import React from 'react';
import {connect} from 'react-redux'
import {buyCarItem} from '../Actions/appActions'
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.buyCarItem()}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, { buyCarItem })(AdditionalFeature);
