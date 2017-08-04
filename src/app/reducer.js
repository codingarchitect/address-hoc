const initialState = {
  soe: {
    deliveryAddress: {
      line1: 'DA Line1',
      line2: 'DA Line2'
    },
    invoiceAddress: {
      line1: 'IA Line1',
      line2: 'IA Line2'
    }
  },
  supplierMaintenance: {
    supplierAddress: {
      line1: 'SA Line1',
      line2: 'SA Line2',
    }
  }
};

function appReducer(state = initialState) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  return state;
}

export default appReducer;