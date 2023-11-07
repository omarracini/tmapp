import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut, 
} from 'firebase/auth';


export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error ('There is not auth provider')
    return context
}

export function AuthProvider ({ children }) {

    const [user, setUser] = useState(null);

    const signup = (email, password) => 
        createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => 
        signInWithEmailAndPassword(auth, email, password)

    const logout = () =>signOut(auth)
        
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])
    return (
        <authContext.Provider value={{ signup, login, user, logout }}> 
            {children} 
        </authContext.Provider>
    )

    
}


