import React from 'react';

import DeliveryAddress1 from './1-individual-components/soe-delivery-address.jsx';
import InvoiceAddress1 from './1-individual-components/soe-invoice-address.jsx';
import SupplierAddress1 from './1-individual-components/supplier-address.jsx';

import DeliveryAddress2 from './2-connect/soe-delivery-address.jsx';
import InvoiceAddress2 from './2-connect/soe-invoice-address.jsx';
import SupplierAddress2 from './2-connect/supplier-address.jsx';

import makeAddressContainer from './3-higher-order-components/address.container.jsx';
const DeliveryAddress3 = makeAddressContainer((state) => {
  return {
    line1: state.soe.deliveryAddress.line1,
    line2: state.soe.deliveryAddress.line2
  };
})
const InvoiceAddress3 = makeAddressContainer((state) => {
  return {
    line1: state.soe.invoiceAddress.line1,
    line2: state.soe.invoiceAddress.line2
  };
})
const SupplierAddress3 = makeAddressContainer((state) => {
  return {
    line1: state.supplierMaintenance.supplierAddress.line1,
    line2: state.supplierMaintenance.supplierAddress.line2
  };
})

const greeting = () => {
  return (
    <div>
      <DeliveryAddress1 />
      <InvoiceAddress1 />
      <SupplierAddress1 />
      <DeliveryAddress2 />
      <InvoiceAddress2 />
      <SupplierAddress2 />
      <DeliveryAddress3 />
      <InvoiceAddress3 />
      <SupplierAddress3 />
    </div>
  );
};

export default greeting;