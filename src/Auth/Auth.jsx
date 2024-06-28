import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext(null);

export const ConstProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const login = (user, password) => {
    setUser(user);
    setPassword(password);
  };

  const logout = () => {
    setUser(null);
    setPassword(null);


  };

  return (
    <AuthContext.Provider value={{ user,password, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
