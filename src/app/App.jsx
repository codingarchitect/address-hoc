import React from 'react';

import DeliveryAddress from './1-individual-components/soe-delivery-address.jsx';
import InvoiceAddress from './1-individual-components/soe-invoice-address.jsx';
import SupplierAddress from './1-individual-components/supplier-address.jsx';

// import DeliveryAddress from './2-connect/soe-delivery-address.jsx';
// import InvoiceAddress from './2-connect/soe-invoice-address.jsx';
// import SupplierAddress from './2-connect/supplier-address.jsx';

// import makeAddressContainer from './3-higher-order-components/address.container.jsx';
// const DeliveryAddress = makeAddressContainer((state) => {
//   return {
//     line1: state.soe.deliveryAddress.line1,
//     line2: state.soe.deliveryAddress.line2
//   };
// })
// const InvoiceAddress = makeAddressContainer((state) => {
//   return {
//     line1: state.soe.invoiceAddress.line1,
//     line2: state.soe.invoiceAddress.line2
//   };
// })
// const SupplierAddress = makeAddressContainer((state) => {
//   return {
//     line1: state.supplierMaintenance.supplierAddress.line1,
//     line2: state.supplierMaintenance.supplierAddress.line2
//   };
// })

const greeting = () => {
  return (
    <div>
      <DeliveryAddress />
      <InvoiceAddress />
      <SupplierAddress />
    </div>
  );
};

export default greeting;