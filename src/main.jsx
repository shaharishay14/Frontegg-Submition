import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-i34jv10zcath.frontegg.com',
  clientId: '39863d4b-b805-40a2-b19d-efc4ea3ec697', 
  appId: '25043dc5-edee-4a4c-bb13-1eee5506875a'
};

const authOptions = {
   keepSessionAlive: false // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
      contextOptions={contextOptions} 
      hostedLoginBox={true}
      authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);