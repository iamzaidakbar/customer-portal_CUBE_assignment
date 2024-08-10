import { useState, useCallback } from 'react';
import { Customer } from '../types/customer';
import { PAGE_SIZE } from '../utils/constants';
import { fetchCustomers } from '../services/fetchCustomers';

export const useCustomerLoader = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const loadCustomers = useCallback(async () => {
    try {
      // Calculate the start index and limit for the current page
      const start = (currentPage - 1) * PAGE_SIZE;
      const limit = PAGE_SIZE;
      // Fetch the next batch of customers
      const newCustomers = await fetchCustomers(start, limit);

       // Determine if there are more customers to load
      setHasMore(newCustomers.length === PAGE_SIZE);

      // Add only unique customers to the list to avoid duplicates
      setCustomers(prevCustomers => {
        const existingIds = new Set(prevCustomers.map(c => c.id));
        const uniqueNewCustomers = newCustomers.filter(customer => !existingIds.has(customer.id));
        return [...prevCustomers, ...uniqueNewCustomers];
      });

      // Move to the next page for future loading
      setCurrentPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching customers:', error);
      console.log({ type: 'FETCH_CUSTOMERS_FAILURE' });
    }
  }, [currentPage]);

  return { customers, loadCustomers, hasMore, currentPage };
};
