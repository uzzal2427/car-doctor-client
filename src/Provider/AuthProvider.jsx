import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user ,setUser] = useState('');
    const [loading, setLoading] = useState(true)

    const handleSingUp = (email , password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    const handleSingIn = (email , password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser);
        });

        return ()=>{
            return unsubscribe();
        }

    },[])
    const authInfo ={
        user,
        handleSingUp,
        handleSingIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;