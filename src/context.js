import { createContext, useReducer } from "react";
import { reducer } from './reducer';

export const SiteContext = createContext();

const inititalState = {
    language: 'ru',
}

export const ContextProvider = ({children}) => {
    const [value, dispatch] = useReducer(reducer, inititalState);

    value.setLanguage = (language) => {
        dispatch({type: 'SET_LANGUAGE', payload: {language: language}})
    } 

    return <SiteContext.Provider value={value}>
        {children}
    </SiteContext.Provider>
}