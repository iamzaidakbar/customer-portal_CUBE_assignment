import React, { useCallback, useRef } from 'react';
import { useCustomerContext } from '../context/CustomerContext';
import CustomerCard from '../components/CustomerCard';
import CustomerDetails from '../components/CustomerDetails';
import { debounce } from '../utils/debounce';
import '../styles/Home.css'
import NoCustomerSelected from '../components/NoCustomerSelected';

const Home: React.FC = () => {
  const { customers, selectedCustomer, loadCustomers, selectCustomer, hasMore } = useCustomerContext();
  const listRef = useRef<HTMLDivElement>(null);

  // Load more customers when nearing the bottom of the list
  const handleScroll = useCallback(debounce(() => {
    if (!listRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 50 && hasMore) {
      console.log('fetching...');
      loadCustomers();
    }
  }, 300), [hasMore, loadCustomers]);

  return (
    <div className="home">
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="customer-list"
      >
        {/* Render customer cards */}
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            isSelected={selectedCustomer?.id === customer.id}
            onSelect={() => selectCustomer(customer)}
          />
        ))}
        {!hasMore && <p>No more customers to load.</p>}
      </div>
      {/* Show customer details or a placeholder if none is selected */}
      {selectedCustomer ? <CustomerDetails customer={selectedCustomer} /> : <NoCustomerSelected />}
    </div>
  );
};

export default Home;
