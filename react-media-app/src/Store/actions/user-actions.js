import JWT from "jsonwebtoken";
import { toast } from "react-toastify";

import { auth, db, storage } from "../../config/fb-config";

const saveUser = (user, data, dispatch) => {
  const profileImage = data.photo[0];
  const metadata = {
    contentType: "image/jpeg",
  };
  const response = storage
    .ref(`/users/${user.user.uid}/profile.jpg`)
    .put(profileImage, metadata);
  response
    .then((uploadTask) => {
      return uploadTask.ref.getDownloadURL();
    })
    .then((img) => {
      db.collection("users").doc(user.user.uid).set({
        email: data.email,
        name: data.username,
        DOB: data.DOB,
        profileImage: img,
        userId: user.user.uid,
        joined: new Date().toDateString(),
      });

      return user.user.updateProfile({
        displayName: data.username,
        photoURL: img,
      });
    })
    .then(() => {
      return user.user.getIdToken();
    })
    .then((token) => {
      const secretToken = JWT.sign({ user: user.user }, token);
      localStorage.setItem("token", secretToken);
    })
    .then(() => {
      dispatch({ type: "STOP_LOADING" });
      return toast.success("Signed up successfully", {
        onClose: () => (window.location.href = "/"),
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signUpUser = (data) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    const response = auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    );
    response
      .then((user) => {
        saveUser(user, data, dispatch);
      })
      .catch((err) => {
        dispatch({ type: "STOP_LOADING" });
        dispatch({ type: "AUTHERROR", payload: err.message });
        toast.error(err.message);
      });
  };
};
