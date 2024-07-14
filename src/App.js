import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route } from 'react-router-dom';
import TicketListPage from './pages/TicketListPage';
import CreateTicket from './pages/CreateTicket';
import EditTicket from './pages/EditTicket';
import Header from './components/Header'; // Importieren Sie die Header-Komponente

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Header /> {/* Fügen Sie die Header-Komponente hinzu */}
          <main>
            <Routes>
              <Route path="/" element={<TicketListPage />} />
              <Route path="/create" element={<CreateTicket />} />
              <Route path="/edit/:id" element={<EditTicket />} />
            </Routes>
          </main>
          <div>
            Hello {user.name}{' '}
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log out
            </button>
          </div>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log in</button>
      )}
    </div>
  );
}

export default App;
