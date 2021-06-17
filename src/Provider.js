import React, { createContext, useState, useContext, useEffect } from "react";
import Sun from "./assets/sun.svg"
import Moon from "./assets/moon.svg"
const Context = createContext();
export const Provider = ({ children }) => {

    const [themeName, setThemeName] = useState("")
    const [openMenu, setOpenMenu] = useState(false)
    
    useEffect(() => {
        const storage = localStorage.getItem("theme")
        if (storage) {
            setThemeName(storage)
        }
        else {
            setThemeName("light")
            localStorage.setItem("theme", "light")
        }
    },[])
    const [icon, setIcon] = useState(themeName === "light" ? Sun : Moon)

    return (
        <Context.Provider value={{themeName, setThemeName, openMenu, setOpenMenu, icon, setIcon }}>
            {children}
        </Context.Provider>
    );
}
export const useProvider = () => useContext(Context);