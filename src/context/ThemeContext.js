import React, { useEffect, useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {




  const applyTheme = (selectedTheme) => {
    const body = document.querySelector('body');
    body.classList.remove('light', 'dark');
    body.classList.add(selectedTheme === 'dark' ? 'dark' : 'light');
  };

  const themeContextValue = {
    theme: theme,
    handleThemeChange: handleThemeChange,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};