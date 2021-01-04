import { useState, useEffect, useContext, createContext } from "react";
import { auth, db, providers } from "../config/firebase";

const AuthContext = createContext({
  user: {},
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
  sendPasswordResetEmail: () => {},
  signInWithGoogle: () => {},
  signInWithFacebook: () => {},
  signInWithGithub: () => {},
});

const useAuthProvider = () => {
  const [user, setUser] = useState(null);

  const createUser = (user) => {
    return db
      .collection("users")
      .doc(user.uid)
      .set(user)
      .then(() => {
        setUser(user);
        return user;
      })
      .catch((error) => {
        return { error };
      });
  };

  const getUserAdditionalData = (user) => {
    return db
      .collection("users")
      .doc(user?.uid)
      .get()
      .then((userData) => {
        if (userData?.data()) {
          setUser(userData.data());
        }
      });
  };

  const signUp = ({ name, email, password }) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        auth?.currentUser.sendEmailVerification();

        return createUser({ uid: response?.user?.uid, email, name });
      })
      .catch((error) => {
        return { error };
      });
  };

  const signIn = ({ email, password }) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response?.user);
        getUserAdditionalData(user);

        return response?.user;
      })
      .catch((error) => {
        return { error };
      });
  };

  const signOut = () => {
    return auth.signOut().then(() => setUser(false));
  };

  const sendPasswordResetEmail = (email) => {
    return auth.sendPasswordResetEmail(email).then((response) => {
      return response;
    });
  };

  const mapFirebaseUserToAuthUser = (user) => {
    return {
      username: user?.displayName,
      email: user?.email,
      uid: user?.uid,
    };
  };

  const signInWithCustomProvider = (response) => {
    const { username, email, uid } = mapFirebaseUserToAuthUser(response?.user);

    createUser({ uid, email, name: username });
    setUser(response?.user);
    getUserAdditionalData(user);
  };

  const signInWithGoogle = () =>
    auth
      .signInWithPopup(providers.googleProvider)
      .then(signInWithCustomProvider);

  const signInWithFacebook = () =>
    auth
      .signInWithPopup(providers.facebookProvider)
      .then(signInWithCustomProvider);

  const signInWithGithub = () =>
    auth
      .signInWithPopup(providers.githubProvider)
      .then(signInWithCustomProvider);

  const handleAuthStateChanged = (user) => {
    setUser(user);

    if (user) {
      getUserAdditionalData(user);
    }
  };

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(handleAuthStateChanged);

    return () => unsub();
  }, []);

  useEffect(() => {
    if (user?.uid) {
      const unsubscribe = db
        .collection("users")
        .doc(user.uid)
        .onSnapshot((doc) => setUser(doc.data()));

      return () => unsubscribe();
    }
  }, []);

  return {
    user,
    signUp,
    signIn,
    signOut,
    sendPasswordResetEmail,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
  };
};

export function AuthProvider({ children }) {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
