import React, { useEffect } from 'react';
import { useCustomerContext } from './context/CustomerContext';
import Home from './pages/Home';
import './styles/App.css';
import CustomerPortalHeading from './components/Heading';

const App: React.FC = () => {
  const { loadCustomers } = useCustomerContext();


  useEffect(() => {
    loadCustomers();
  }, []);


  return (
    <div className="app">
      <CustomerPortalHeading />
      <Home />
    </div>
  );
};

export default App;
