import React, { memo } from 'react';
import { Customer } from '../types/customer';
import { truncateText } from '../utils/truncate';
import '../styles/customerCard.css'

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = memo(({ customer, isSelected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className={`customer-card ${isSelected ? 'selected' : ''}`}
      role="button"
      tabIndex={0} 
      aria-selected={isSelected}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
    >
      <h3>{truncateText(customer.name, 50)}</h3>
      <p>{truncateText(customer.title, 190)}</p>
    </div>
  );
});

export default CustomerCard;
