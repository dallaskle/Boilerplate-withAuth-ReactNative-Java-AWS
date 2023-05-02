import React, { createContext, useState } from 'react';

export const RouterContext = createContext();

export const RouterContextProvider = ({ children }) => {
  const [router, setRouter] = useState({ name: 'Home', label: 'Home' });

  const updateRouter = (route) => {
    setRouter(route);
  };

  return (
    <RouterContext.Provider value={{ router, updateRouter }}>
      {children}
    </RouterContext.Provider>
  );
};
