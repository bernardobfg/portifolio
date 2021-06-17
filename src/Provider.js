import React, { createContext, useState, useContext, useEffect } from "react";

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
    

    return (
        <Context.Provider value={{themeName, setThemeName, openMenu, setOpenMenu }}>
            {children}
        </Context.Provider>
    );
}
export const useProvider = () => useContext(Context);