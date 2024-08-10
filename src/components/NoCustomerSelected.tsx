import React from 'react';
import '../styles/NoCustomerSelected.css'


const NoCustomerSelected: React.FC = () => {
  return (
    <div className='no-customer-selected'>
      <h3>No Customer selected!</h3>
      <p>Please select any customer to check the details.</p>
    </div>
  );
};

export default NoCustomerSelected;
