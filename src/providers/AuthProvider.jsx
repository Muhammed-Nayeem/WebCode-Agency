import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthProvider = ({children}) => {
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let value = {user, loading, createUser, signInUser};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
