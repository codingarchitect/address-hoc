import React from 'react';
import PropTypes from 'prop-types';

import AddressPresentational from '../address.presentational.jsx';

const SoeDeliveryAddress = (props, context) => {
  const state = context.store.getState();
  const { line1, line2 } = state.soe.deliveryAddress;
  return (<div>
    <h3>Individual Component</h3>
    <AddressPresentational line1={line1} line2={line2} />
  </div>);
};

SoeDeliveryAddress.contextTypes = {
  store: PropTypes.object,
};

export default SoeDeliveryAddress;
