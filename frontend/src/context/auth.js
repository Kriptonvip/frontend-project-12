import { useState, useContext, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { socket } from '../context/socket';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  // console.log(username, 'from auth username')
  const login = () => {
    const { username: name } = JSON.parse(localStorage.user);
    setUsername(name);
  };
  useEffect(() => {
    if(localStorage.user) login()
  }, [username]);
  const logout = () => {
    socket.removeAllListeners();
    localStorage.user = '';
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ logout, username, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
