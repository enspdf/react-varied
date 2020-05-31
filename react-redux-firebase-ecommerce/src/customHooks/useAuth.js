import { useEffect } from "react";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  currenUser: user.currenUser,
});

const useAuth = (props) => {
  const { currenUser } = useSelector(mapState);

  useEffect(() => {
    if (!currenUser) {
      props.history.push("/login");
    }
  }, [currenUser]);

  return currenUser;
};

export default useAuth;
