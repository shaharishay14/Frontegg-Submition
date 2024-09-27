import './App.css';
import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder, AdminPortal, useAuthActions } from "@frontegg/react";

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const { switchTenant } = useAuthActions();

  useEffect(() => {
    console.log('Authentication state:', isAuthenticated);
    console.log('User:', user);
  }, [isAuthenticated, user]);
  


  const openAdminPortal = () => {
    AdminPortal.show();
  }

  const handleSwitchTenant = (tenantId) => {
    switchTenant({ tenantId });
  };

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };
  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div className='card'>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <br />
          <div>
            <button onClick={openAdminPortal}>Settings</button>
          </div>
          <br />
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <br />
          <div className='card'>
            <select onChange={(e) => handleSwitchTenant(e.target.value)}>
              <option value="">Switch Tenant</option>
              {user.tenantIds.map((tenantId) => (
                <option key={tenantId} value={tenantId}>
                  {tenantId}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Login with Magic Link</button>
        </div>
      )}
    </div>
  );
}

export default App
 