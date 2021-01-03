import { useState, useEffect, createContext } from "react";
import cookie from "js-cookie";
import { auth } from "../config/firebase";

const tokenName = "firebaseToken";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const emailLogin = async (email, password, redirectPath) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => console.log("User logged in"))
      .catch((err) => console.log(err));
  };

  const onAuthStateChange = () => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        cookie.set(tokenName, token, { expires: 14 });
      } else {
        cookie.remove(tokenName);
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChange();

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ emailLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
