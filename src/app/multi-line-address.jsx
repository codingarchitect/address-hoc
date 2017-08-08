import React from 'react';

const Address = ({ line1, line2 }) => <div>  
  <div>
    <label>
      Line 1: 
      <input type="text" value={line1} />
    </label>
  </div>
  <div>
    <label>
      Line 2: 
      <input type="text" value={line2} />
    </label>
  </div>
</div>;

export default Address;
