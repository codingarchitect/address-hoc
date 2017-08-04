import React from 'react';

import DeliveryAddress from './individual-components/soe-delivery-address.jsx';
import InvoiceAddress from './individual-components/soe-invoice-address.jsx';
import SupplierAddress from './individual-components/supplier-address.jsx';

// import DeliveryAddress from './connect/soe-delivery-address.jsx';
// import InvoiceAddress from './connect/soe-invoice-address.jsx';
// import SupplierAddress from './connect/supplier-address.jsx';

// import makeAddressContainer from './higher-order-components/address.container.jsx';
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