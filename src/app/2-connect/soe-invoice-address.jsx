import React from 'react';
import { connect } from 'react-redux';

import Address from '../address.jsx';

const mapStateToProps = (state) => {
  return {
    line1: state.soe.invoiceAddress.line1,
    line2: state.soe.invoiceAddress.line2
  };
}

const SoeInvoiceAddress = (props) => {
  return (<div>
    <h3>Using Connect</h3>
    <Address {...props} />
  </div>);
};

export default connect(mapStateToProps)(SoeInvoiceAddress);
