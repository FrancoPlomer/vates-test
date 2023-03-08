import { createContext, useContext } from 'react';

const GlobalContext = createContext();

export const AccessContext = () => {
    return useContext( GlobalContext );
}

export default GlobalContext;