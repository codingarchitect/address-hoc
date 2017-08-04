import React from 'react';
import { connect } from 'react-redux';

import AddressPresentational from '../address.presentational.jsx';

const mapStateToProps = (state) => {
  return {
    line1: state.soe.invoiceAddress.line1,
    line2: state.soe.invoiceAddress.line2
  };
}

const SoeInvoiceAddress = ({line1, line2}) => {
  return (<div>
    <h3>Using Connect</h3>
    <AddressPresentational line1={line1} line2={line2} />
  </div>);
};

export default connect(mapStateToProps)(SoeInvoiceAddress);
