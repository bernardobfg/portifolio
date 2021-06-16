import React, { createContext, useState, useContext } from "react";

const SetThemeContext = createContext();
export const SetThemeProvider = ({ children }) => {

    const [themeName, setThemeName] = useState("light")
    return (
        <SetThemeContext.Provider value={{themeName, setThemeName }}>
            {children}
        </SetThemeContext.Provider>
    );
}
export const useTheme = () => useContext(SetThemeContext);