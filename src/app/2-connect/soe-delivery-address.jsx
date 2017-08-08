import React from 'react';
import { connect } from 'react-redux';

import Address from '../address.jsx';

const mapStateToProps = (state) => {
  return {
    line1: state.soe.deliveryAddress.line1,
    line2: state.soe.deliveryAddress.line2
  };
}

const SoeDeliveryAddress = (props) => {
  return (<div>
    <h3>Using Connect</h3>
    <Address {...props} />
  </div>);
};

export default connect(mapStateToProps)(SoeDeliveryAddress);
