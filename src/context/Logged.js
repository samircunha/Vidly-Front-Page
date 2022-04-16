import React, {useState, createContext, useContext} from 'react';

const LoggedContext = createContext();

export const Logged = ({children}) => {
    const [logged, setLogged] = useState(false);
    
    function changeStatus(isLogged) {
        setLogged(isLogged);
    }

    return (
        <LoggedContext.Provider value={{logged, changeStatus}}>
            {children}
        </LoggedContext.Provider>
    )
}

export const useLogged = () => useContext(LoggedContext);