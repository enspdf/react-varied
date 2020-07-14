import { db, storage } from "../../config/fb-config";
import { toast } from "react-toastify";
import moment from "moment";

export const createFeed = (data, username, userId) => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });
    const newsfeed = {};

    const respose = storage
      .ref(`/users/${userId}/profile.jpg`)
      .getDownloadURL();
    respose
      .then((img) => {
        newsfeed.userId = userId;
        newsfeed.username = username;
        newsfeed.photo = data.image;
        newsfeed.userImage = img;
        newsfeed.content = data.content;
        newsfeed.commentCount = 0;
        newsfeed.createdAt = new Date().toString();
      })
      .then(() => {
        return db.collection("newsfeed").add(newsfeed);
      })
      .then(() => {
        toast.success("Created feed successfully", {
          onClose: () => (window.location.href = "/"),
        });
      })
      .then(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  };
};
