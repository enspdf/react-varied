import App from "next/app";
import firebase, { FirebaseContext } from "../firebase";
import useAuthentication from "../hooks/useAuthentication";

const Application = ({ Component, pageProps }) => {
  const user = useAuthentication();

  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default Application;
