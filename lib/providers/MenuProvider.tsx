import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children : any }) {
    const [menuopen, setMenuOpen] = useState(false);
    return (
        <MenuContext.Provider value={{ menuopen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}