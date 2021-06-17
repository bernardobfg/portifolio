import React, { createContext, useState, useContext, useEffect } from "react";

const SetThemeContext = createContext();
export const SetThemeProvider = ({ children }) => {

    const [themeName, setThemeName] = useState("")
    const storage = localStorage.getItem("theme")
    useEffect(() => {
        if (storage) {
            setThemeName(storage)
        }
        else {
            setThemeName("light")
            localStorage.setItem("theme", "light")
        }
    },[])
    

    return (
        <SetThemeContext.Provider value={{themeName, setThemeName }}>
            {children}
        </SetThemeContext.Provider>
    );
}
export const useTheme = () => useContext(SetThemeContext);