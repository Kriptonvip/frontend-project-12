import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './slices/store';
import { AuthProvider } from './context/auth';
import { SocketContext, socket } from './context/socket';

function Init() {  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <SocketContext.Provider value={socket}>
            <App />
          </SocketContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default Init;
