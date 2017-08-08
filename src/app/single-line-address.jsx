import React from 'react';

const zipAddressLines = (line1, line2) => [line1, line2].filter(line => line).join(', ');
const Address = ({ line1, line2 }) => <label>{zipAddressLines(line1, line2)}</label>;
export default Address;
