import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL,
  clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID,
  appId: import.meta.env.VITE_FRONTEGG_APP_ID
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