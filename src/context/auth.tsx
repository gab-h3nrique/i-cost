import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }:any) => {
    const [userAuth, setUserAuth] = useState({});
    const addAuthUser = (userObject:object) => {
        setUserAuth(userObject)
    }
    const removeAuthUser = () => {
        setUserAuth({})
    }

    return (
        <AuthContext.Provider value={{userAuth, addAuthUser, removeAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}