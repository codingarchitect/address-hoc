import React from 'react';
import { connect } from 'react-redux';

import AddressPresentational from '../address.presentational.jsx';

const Address = ({line1, line2}) => {
  return (<div>
    <h3>HOC</h3>
    <AddressPresentational line1={line1} line2={line2} />
  </div>);
};

export default (mapStateToProps) => connect(mapStateToProps)(Address);
