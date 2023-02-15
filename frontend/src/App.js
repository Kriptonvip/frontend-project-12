import { Routes, Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { RequireAuth } from './components/RequireAuth';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
