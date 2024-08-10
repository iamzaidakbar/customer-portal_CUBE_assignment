import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CustomerProvider } from './context/CustomerContext.tsx';

createRoot(document.getElementById('root')!).render(

        <CustomerProvider>
            <App />
        </CustomerProvider>
);
