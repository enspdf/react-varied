import { useState, useEffect } from "react";
import firebase from "../firebase";

function useAuthentication() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });

    return () => unsubscribe;
  }, []);

  return authenticatedUser;
}

export default useAuthentication;
