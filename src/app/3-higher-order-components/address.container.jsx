import React from 'react';
import { connect } from 'react-redux';

import Address from '../address.jsx';

const AddressContainer = (props) => {
  return (<div>
    <h3>HOC</h3>
    <Address {...props} />
  </div>);
};

export default (mapStateToProps) => connect(mapStateToProps)(AddressContainer);
