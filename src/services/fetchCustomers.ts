// src/services/fetchCustomers.ts
import { Customer } from '../types/customer';
import { dummyCustomers } from './dummyCustomer';

export const fetchCustomers = (start: number, limit: number): Promise<Customer[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyCustomers.slice(start, start + limit));
    }, 500); 
  });
};
