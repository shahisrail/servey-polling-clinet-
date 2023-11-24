/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import axios from "axios";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app  );

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createuser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signinWithGoogle = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUSer = { email: userEmail };
      console.log("user in the auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
      // // if user exist then issue a token
      if (currentUser) {
        axios
          .post("https://assaignment-11-server-nu.vercel.app/jwt", loggedUSer, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response ", res.data);
          });
      } else {
        axios
          .post(
            "https://assaignment-11-server-nu.vercel.app/logout",
            loggedUSer,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    createuser,
    loading,
    logout,
    signIn,
    signinWithGoogle,
    setUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
