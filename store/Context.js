import React, { useContext, useState } from 'react'


export const Context = React.createContext({
    navIsOpen: false,
    toggleNav: () => { }
});

export const useNavContext = () => {
    return useContext(Context);
}


const ContextProvider = ({ children }) => {

    const [navIsOpen, setNavIsOpen] = useState(false);

    const toggleNavIsOpen = () => {
        setNavIsOpen((prevState) => {
            return !prevState;
        })
    }

    return (
        <Context.Provider value={{
            navIsOpen,
            toggleNav: toggleNavIsOpen
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;