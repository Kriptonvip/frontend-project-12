
import { useState, useContext, createContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ( {children }) => {
    const [username, setUser] = useState(null);

    const login = (username) => {
        setUser(username);
    }
    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ username, login, logout }}>
            {children} 
        </AuthContext.Provider>
    )
  }
  
  export const useAuth = () => useContext(AuthContext);
  