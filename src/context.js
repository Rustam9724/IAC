import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const SiteContext = createContext();

const inititalState = {
    language: 'ru',
    isModalForm: false,
    isBurgerMenu: false,
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, inititalState);

    state.setLanguage = (language) => {
        dispatch({type: 'SET_LANGUAGE', payload: {language: language}})
    }

    state.setIsModalForm = (action) => {
        dispatch({type: 'SET_MODAL-FORM', payload: {action: action}})
    }

    state.setIsBurgerMenu = (isBurgerMenu) => {
        dispatch({type: 'SET_IS-BURGER_MENU', payload: {isBurgerMenu: isBurgerMenu}})
    }

    return <SiteContext.Provider value={state}>
        {children}
    </SiteContext.Provider>
}