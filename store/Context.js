import React, { useContext, useState } from 'react'

export const MODAL_TYPES = {
    NONE: "none",
    HVA_ER_RESTOR_FX: "hva-er-restor-fx",
    RESTOR_FX: "restorfx",
    CLEAR_FX: "clearfx",
    LAKK_RESTAURERING: "lakkrestaurering",
    FRONTLYS_RESTAURERING: "frontlysrestaurering",
    LAKK_BESKYTTELSE: "lakkbeskyttelse",
    BIL_PLEIE: "bilpleie"
}


export const Context = React.createContext({
    navIsOpen: false,
    toggleNav: () => { }
});

export const useNavContext = () => {
    return useContext(Context);
}

const ModalContext = React.createContext({
    modalType: MODAL_TYPES.NONE,
    setModalType: (modalType) => { }
})

export const useModalContext = () => {
    return useContext(ModalContext);
}


const ContextProvider = ({ children }) => {

    // Nav modal
    const [navIsOpen, setNavIsOpen] = useState(false);

    const toggleNavIsOpen = () => {
        setNavIsOpen((prevState) => {
            return !prevState;
        })
    }

    // Modal
    const [modal, setModal] = useState(MODAL_TYPES.NONE);

    const openCertainModal = (modalType) => {
        setModal(modalType);
    }

    return (
        <Context.Provider value={{
            navIsOpen,
            toggleNav: toggleNavIsOpen
        }}>
            <ModalContext.Provider value={{
                modalType: modal,
                setModalType: openCertainModal
            }}>
                {children}
            </ModalContext.Provider>
        </Context.Provider>
    )
}

export default ContextProvider;