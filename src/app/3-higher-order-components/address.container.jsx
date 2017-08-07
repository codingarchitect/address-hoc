import React from 'react';
import { connect } from 'react-redux';

import Address from '../address.jsx';

const AddressContainer = ({line1, line2}) => {
  return (<div>
    <h3>HOC</h3>
    <Address line1={line1} line2={line2} />
  </div>);
};

export default (mapStateToProps) => connect(mapStateToProps)(AddressContainer);
