import React from 'react';
import PropTypes from 'prop-types';

import Address from '../address.jsx';

const SupplierAddress = (props, context) => {
  const state = context.store.getState();
  const { line1, line2 } = state.supplierMaintenance.supplierAddress;
  return (<div>
    <h3>Individual Component</h3>
    <Address line1={line1} line2={line2} {...props} />
  </div>);
};

SupplierAddress.contextTypes = {
  store: PropTypes.object,
};

export default SupplierAddress;
